import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mundial',
  imports: [Header, FormsModule],
  templateUrl: './mundial.html',
  styleUrl: './mundial.css',
})
export class Mundial {
  elements: number = 0;
  partidos: { brasil: number | null; colombia: number | null }[] = [];
  resultados: string[] = [];
  mostrarResultados: boolean = false;

  generateElements(event: number): void {
    this.elements = event;
    this.partidos = Array(event)
      .fill(null)
      .map(() => ({ brasil: null, colombia: null }));
    this.resultados = [];
    this.mostrarResultados = false;
  }

  calcularResultados(): void {
    this.resultados = this.partidos.map((partido) => {
      const brasil = partido.brasil ?? 0;
      const colombia = partido.colombia ?? 0;

      if (colombia > brasil) {
        return 'ganamos';
      } else if (brasil > colombia) {
        return 'perdimos';
      } else {
        return 'casi ganamos';
      }
    });
    this.mostrarResultados = true;
  }
}
