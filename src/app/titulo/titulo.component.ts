import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})

// Componente hijo que hereda "titulo"
export class TituloComponent implements OnChanges{
  // Aqui hereda del padre header
  @Input() titulo = "";
  // Aquí pasa info al padre
  @Output() datosFromChild = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    // Se usa método emit para compartir al padre
    this.datosFromChild.emit("datos from child")
  }
}
