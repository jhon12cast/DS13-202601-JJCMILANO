import { Component, input, output } from '@angular/core';
import { CcBtn } from '../../atoms/cc-btn/cc-btn';

@Component({
  selector: 'app-cc-product-card',
  imports: [CcBtn],
  templateUrl: './cc-product-card.html',
  styleUrl: './cc-product-card.css',
})
export class CcProductCard {
  readonly titulo = input.required<string>();
  readonly precio = input.required<string>();
  readonly descripcion = input.required<string>();
  readonly imagenUrl = input.required<string>();
  readonly imagenAlt = input.required<string>();
  readonly pedir = output<void>();

  onPedir(): void {
    this.pedir.emit();
  }
}
