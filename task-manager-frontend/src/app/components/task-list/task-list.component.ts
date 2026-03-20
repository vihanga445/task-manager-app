import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TaskService, Task } from '../../services/task.service';
import { RouterModule, Router } from '@angular/router'; 
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr'; 
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  
  allTasks: Task[] = []; 
  tasks: Task[] = [];    
  selectedStatus: string = 'ALL';

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService 
  ) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.allTasks = data;
        this.filterTasks(this.selectedStatus);
      },
      error: (err) => {
        this.toastr.error('Could not sync with cloud', 'Connection Error');
      }
    });
  }

  filterTasks(status: string) {
    this.selectedStatus = status;
    this.tasks = (status === 'ALL') ? this.allTasks : this.allTasks.filter(t => t.status === status);
  }

  onDelete(id: number | undefined) {
    if (!id) return;

    Swal.fire({
      title: 'Remove Task?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', 
      cancelButtonColor: '#d33',    
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Keep it',
      heightAuto: false 
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe({
          next: () => {
            this.allTasks = this.allTasks.filter(t => t.id !== id);
            this.filterTasks(this.selectedStatus);
            this.toastr.warning('Task removed successfully', 'Deleted');
          },
          error: () => this.toastr.error('Delete failed', 'Error')
        });
      }
    });
  }

  onLogout() {
    Swal.fire({
      title: 'Sign Out?',
      text: "You will need to login again to access your tasks.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Logout',
      cancelButtonText: 'Stay logged in'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.router.navigate(['/']);
      }
    });
  }
}