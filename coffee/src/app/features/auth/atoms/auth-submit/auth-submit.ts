import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appAuthSubmit]',
  host: {
    type: 'submit',
    class: 'auth-submit',
    '[disabled]': 'disabled()',
  },
  template: '<ng-content />',
  styleUrl: './auth-submit.css',
})
export class AuthSubmit {
  readonly disabled = input(false);
}
