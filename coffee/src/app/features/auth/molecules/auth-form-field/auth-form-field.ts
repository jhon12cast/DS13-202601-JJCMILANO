import { Component, input } from '@angular/core';
import { ReactiveFormsModule, type FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-form-field',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form-field.html',
  styleUrl: './auth-form-field.css',
})
export class AuthFormField {
  readonly fieldId = input.required<string>();
  readonly label = input.required<string>();
  readonly control = input.required<FormControl<string>>();
  readonly type = input('text');
  readonly autocomplete = input('');
}
