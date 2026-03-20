import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Task {
  id?: number;
  title: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8091/api/v1/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  deleteTask(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getTaskById(id: number): Observable<Task> {
  return this.http.get<Task>(`${this.baseUrl}/${id}`);
}

updateTask(id: number, task: Task): Observable<Task> {
  return this.http.put<Task>(`${this.baseUrl}/${id}`, task);
}
}