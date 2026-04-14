import { Component, input } from '@angular/core';

export type CcBtnVariant = 'primary' | 'pedir' | 'whatsapp' | 'outline';

@Component({
  selector: 'button[appCcBtn]',
  host: {
    type: 'button',
    class: 'cc-btn',
    '[class.cc-btn--primary]': 'variant() === "primary"',
    '[class.cc-btn--pedir]': 'variant() === "pedir"',
    '[class.cc-btn--whatsapp]': 'variant() === "whatsapp"',
    '[class.cc-btn--outline]': 'variant() === "outline"',
  },
  template: '<ng-content />',
  styleUrl: './cc-btn.css',
})
export class CcBtn {
  readonly variant = input<CcBtnVariant>('primary');
}
