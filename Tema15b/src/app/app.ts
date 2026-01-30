import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  titulo: string = 'Iniciación a Angular';
  descripcion: string = 'Esta es una aplicación de ejemplo para aprender Angular.';

  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  mostrar: boolean = true;

  toggle() {
    this.mostrar = !this.mostrar;
  }

  alumnos: string[] = ['Ana', 'Luis', 'María'];

  nuevoAlumno: string = '';

  agregarAlumno(nombre: string) {
    this.alumnos.push(nombre);
    this.nuevoAlumno = '';
    this.titulo = 'Alumno ' + nombre + ' agregado';
  }

  // Pipes
  fecha = new Date();
  precio = 1234.5;
  nombre = 'angular moderno';
}
