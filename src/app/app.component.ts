import { Component } from '@angular/core';
import { Lista } from './lista.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  modal = false;
  taskIndex = 0;
  inputValue = '';
  nuevoNombre = '';
  lista: Lista[] = [
    {
      task: 'ordenar',
      status: false,
    },
    {
      task: 'limpiar',
      status: false,
    },
    {
      task: 'estudiar',
      status: false,
    },
    {
      task: 'planchar',
      status: false,
    },
  ];

  changeStatus(index: number) {
    this.lista[index].status = !this.lista[index].status;
  }

  deleteTask(index: number) {
    this.lista.splice(index, 1);
  }

  changeTask(index: number) {
    if (this.nuevoNombre) this.lista[index].task = this.nuevoNombre;
    this.nuevoNombre = '';
  }

  addTask() {
    if (this.inputValue)
      this.lista.push({
        task: this.inputValue,
        status: false,
      });

    this.inputValue = '';
  }

  modalOpen(i: number) {
    this.modal = !this.modal;
    this.taskIndex = i;
  }
}
