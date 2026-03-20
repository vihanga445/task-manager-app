import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {

  taskId: number | null = null;
  isEditMode = false;

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl(''),
    status: new FormControl('TO_DO')
  });

  constructor(
    private taskService: TaskService, 
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = +id;
      this.isEditMode = true;
      this.loadTaskDetails(this.taskId);
    }
  }

  loadTaskDetails(id: number) {
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        this.taskForm.patchValue(task);
      },
      error: (err) => {
        this.toastr.error('Could not retrieve task data', 'Error');
        this.router.navigate(['/tasks']);
      }
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.isEditMode && this.taskId) {
        this.taskService.updateTask(this.taskId, this.taskForm.value as any).subscribe({
          next: () => {
            this.toastr.success('Task details updated successfully');
            this.router.navigate(['/tasks']);
          },
          error: (err) => this.toastr.error('Update failed. Try again.', 'Error')
        });
      } else {
        this.taskService.createTask(this.taskForm.value as any).subscribe({
          next: () => {
            this.toastr.success('Your new task is live!', 'Task Created');
            this.router.navigate(['/tasks']);
          },
          error: (err) => this.toastr.error('Save failed. Please check connection.', 'Error')
        });
      }
    }
  }
}