import { Component } from '@angular/core';
import { CoffeePageTemplate } from '../../components/cafeteria/templates/coffee-page-template/coffee-page-template';
import { CcProducto } from '../../components/cafeteria/organisms/cc-seleccion/cc-seleccion';

const PRODUCTOS: CcProducto[] = [
  {
    titulo: 'Espresso Masterpieces',
    precio: '$6.500',
    descripcion:
      'Un blend exquisito de granos de altura con notas de chocolate oscuro y avellana.',
    imagenUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
    imagenAlt: 'Espresso Masterpieces',
  },
  {
    titulo: 'Iced Favorites',
    precio: '$6.200',
    descripcion:
      'Café helado macerado por 12 horas, servido sobre hielo con un toque de vainilla natural.',
    imagenUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
    imagenAlt: 'Iced Favorites',
  },
  {
    titulo: 'Organic Beans',
    precio: '$22.000',
    descripcion: 'Bolsa de 250g de café certificado orgánico de origen único (Huila, Colombia).',
    imagenUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600',
    imagenAlt: 'Organic Beans',
  },
];

@Component({
  selector: 'app-coffee-screen',
  imports: [CoffeePageTemplate],
  templateUrl: './coffee-screen.html',
  styleUrl: './coffee-screen.css',
})
export class CoffeeScreen {
  protected readonly productos = PRODUCTOS;

  abrirPedido(producto: CcProducto): void {
    const msg = encodeURIComponent('Hola, me gustaría pedir: ' + producto.titulo);
    window.open('https://wa.me/573001234567?text=' + msg, '_blank');
  }
}
