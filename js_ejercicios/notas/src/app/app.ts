import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Estudiante {
  nota1: number | null;
  nota2: number | null;
  nota3: number | null;
  resultado: number | null;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected cantidadEstudiantes: number | null = null;
  protected estudiantes: Estudiante[] = [];
  protected mostrarInputs = false;
  protected mostrarResultados = false;

  evaluar(): void {
    if (
      this.cantidadEstudiantes === null ||
      this.cantidadEstudiantes < 1 ||
      this.cantidadEstudiantes > 50
    ) {
      return;
    }

    this.estudiantes = [];
    for (let i = 0; i < this.cantidadEstudiantes; i++) {
      this.estudiantes.push({ nota1: null, nota2: null, nota3: null, resultado: null });
    }
    this.mostrarInputs = true;
    this.mostrarResultados = false;
  }

  calcular(): void {
    for (const est of this.estudiantes) {
      if (est.nota1 === null || est.nota2 === null || est.nota3 === null) {
        continue;
      }
      const notas = [est.nota1, est.nota2, est.nota3].sort((a, b) => a - b);
      est.resultado = notas[1];
    }
    this.mostrarResultados = true;
  }
}
