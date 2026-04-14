import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSubmit } from '../../atoms/auth-submit/auth-submit';
import { AuthFormField } from '../../molecules/auth-form-field/auth-form-field';
import { LoginService } from '../../../../services/login.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-register-form-organism',
  imports: [ReactiveFormsModule, AuthFormField, AuthSubmit],
  templateUrl: './register-form-organism.html',
  styleUrl: './register-form-organism.css',
})
export class RegisterFormOrganism {
  private readonly fb = inject(FormBuilder);
  private readonly loginService = inject(LoginService);

  readonly registered = output<void>();

  readonly form = this.fb.nonNullable.group({
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    ciudad: ['', Validators.required],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
  });

  errorMessage = '';

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const user: User = {
      cedula: v.cedula.trim(),
      nombre: v.nombre.trim(),
      apellidos: v.apellidos.trim(),
      correo: v.correo.trim(),
      ciudad: v.ciudad.trim(),
      contrasena: v.contrasena,
    };
    const result = this.loginService.register(user);
    if (!result.ok) {
      this.errorMessage = result.message;
      return;
    }
    this.form.reset();
    this.registered.emit();
  }
}
