import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { GoogleAuth } from '@services/google-auth/google-auth';
import { User } from '@services/users/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  private readonly googleAuth = inject(GoogleAuth);
  private readonly user = inject(User);
  private readonly formBuilder = inject(FormBuilder);

  public formUser!: FormGroup;
  public isSubmitting = false;
  public showPassword = false;
  public showConfirmPassword = false;

  ngOnInit(): void {
    this.formUser = this.formBuilder.group(
      {
        full_name: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
            Validators.minLength(3),
            Validators.maxLength(100),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        subscription_plan_id: ['free', [Validators.required]],
        accept_terms: [false, [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  private passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };

  // Validation helper methods
  getFieldError(fieldName: string): string {
    const field = this.formUser.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['pattern']) {
        return this.getPatternErrorMessage(fieldName);
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${
          field.errors['minlength'].requiredLength
        } characters`;
      }
      if (field.errors['maxlength']) {
        return `${this.getFieldLabel(fieldName)} must not exceed ${
          field.errors['maxlength'].requiredLength
        } characters`;
      }
    }
    return '';
  }

  getFormError(): string {
    if (this.formUser.errors && this.formUser.touched) {
      if (this.formUser.errors['passwordMismatch']) {
        return 'Passwords do not match';
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      full_name: 'Full name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      subscription_plan_id: 'Plan',
      accept_terms: 'Terms acceptance',
    };
    return labels[fieldName] || fieldName;
  }

  private getPatternErrorMessage(fieldName: string): string {
    if (fieldName === 'email') {
      return 'Please enter a valid email address';
    }
    if (fieldName === 'password') {
      return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    return 'Invalid format';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formUser.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  register() {
    if (this.isSubmitting) return;

    this.formUser.markAllAsTouched();

    if (this.formUser.invalid) {
      throw new Error('Form is invalid');
    }

    const { subscription_plan_id, accept_terms, confirmPassword, ...user } = this.formUser.value;

    if (!accept_terms) {
      throw new Error('You must accept the terms and conditions');
    }

    this.isSubmitting = true;

    if (subscription_plan_id === 'pro') {
      // TODO: Add pro plan logic
    }

    this.user.createUser({ ...user, accept_terms }).subscribe({
      next: (res) => {
        console.log('User created successfully:', res);
        this.isSubmitting = false;
        // TODO: Redirect to dashboard or show success message
      },
      error: (error) => {
        this.isSubmitting = false;
        throw error;
        // TODO: Show error message to user
      },
    });
  }

  onGoogleSignIn() {
    this.googleAuth.googleLogin();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
