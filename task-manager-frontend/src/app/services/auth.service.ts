import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:8091/api/auth';

  constructor(private http: HttpClient) { }

  
  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData).pipe(
      tap(response => {
        if (response.token) {
          
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  register(userData: any): Observable<string> {
    
    return this.http.post(`${this.baseUrl}/register`, userData, { responseType: 'text' });
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
  
  return !!localStorage.getItem('token'); 
}
}