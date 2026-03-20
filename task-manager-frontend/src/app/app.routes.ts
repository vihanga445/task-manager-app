import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { authGuard } from './guards/auth.guard';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { guestGuard } from './guards/guest.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'tasks', component: TaskListComponent, canActivate: [authGuard] },
  { path: 'add-task', component: TaskFormComponent, canActivate: [authGuard] },
  { path: 'edit-task/:id', component: TaskFormComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
  { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];