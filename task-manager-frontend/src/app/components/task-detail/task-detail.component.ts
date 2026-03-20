import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(+id).subscribe({
        next: (data) => this.task = data,
        error: () => {
          this.toastr.error('Could not find that task.', 'Error');
        }
      });
    }
  }
}