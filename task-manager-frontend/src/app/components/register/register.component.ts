import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  showPassword = false;

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/) 
    ]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: this.passwordMatchValidator });

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService 
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value 
      ? { mismatch: true } 
      : null;
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      
      this.authService.register({ username, password }).subscribe({
        next: () => {
          this.toastr.success('Welcome to TaskManager! Your account is ready.', 'Success');
          this.router.navigate(['/login']);
        },
        error: () => {
          this.toastr.error('That username might be taken or the server is down.', 'Registration Failed');
        }
      });
    } else {
      this.toastr.warning('Please check your details and try again.', 'Validation Error');
    }
  }
}