import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appCcIconBtn]',
  host: {
    type: 'button',
    class: 'cc-icon-btn',
    '[attr.aria-label]': 'ariaLabel()',
  },
  template: '<ng-content />',
  styleUrl: './cc-icon-btn.css',
})
export class CcIconBtn {
  readonly ariaLabel = input.required<string>();
}
