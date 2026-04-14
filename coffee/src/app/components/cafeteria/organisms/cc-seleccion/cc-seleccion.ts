import { Component, input, output } from '@angular/core';
import { CcProductCard } from '../../molecules/cc-product-card/cc-product-card';

export interface CcProducto {
  titulo: string;
  precio: string;
  descripcion: string;
  imagenUrl: string;
  imagenAlt: string;
}

@Component({
  selector: 'app-cc-seleccion',
  imports: [CcProductCard],
  templateUrl: './cc-seleccion.html',
  styleUrl: './cc-seleccion.css',
})
export class CcSeleccion {
  readonly productos = input.required<CcProducto[]>();
  readonly pedir = output<CcProducto>();
}
