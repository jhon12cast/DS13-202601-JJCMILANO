import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSubmit } from '../../atoms/auth-submit/auth-submit';
import { AuthFormField } from '../../molecules/auth-form-field/auth-form-field';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-login-form-organism',
  imports: [ReactiveFormsModule, AuthFormField, AuthSubmit],
  templateUrl: './login-form-organism.html',
  styleUrl: './login-form-organism.css',
})
export class LoginFormOrganism {
  private readonly fb = inject(FormBuilder);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
  });

  errorMessage = '';

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { correo, contrasena } = this.form.getRawValue();
    const result = this.loginService.login(correo.trim(), contrasena);
    if (!result.ok) {
      this.errorMessage = result.message;
      return;
    }
    void this.router.navigateByUrl('/dashboard');
  }
}
