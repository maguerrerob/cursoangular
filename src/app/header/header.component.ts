import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DestroyRef, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

// Componente padre que pasa pageTitulo a componente hijo Titulo
export class HeaderComponent {
  pageTitulo = "MY APP"

  constructor(){
    console.log("COnstructor header ejecutado")
  }
  
  onDataCheck(evento: any){
    console.log(evento);
  }

  // // Se ejecuta cuando llega nueva información a nuestros componentes
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngOnChange ejecurtado")
  // }

  // // Se ejecuta antes del render del componente
  // ngOnInit(): void {
  //   console.log("ngoninit ejecurtado")
  // }

  // // Se ejecuta cuando algo pase o cambie en nuestra interfaz
  // ngDoCheck(): void {
  //   console.log("ngDoCheck ejecurtado")
  // }

  // //Se ejecuta cuando el contenido proyectado a través de <ng-content> se inicia
  // ngAfterContentInit(): void {
  //   console.log("ngafterContentInit ejecurtado")
  // }

  // // Se ejecuta cuando se lanza el ngDoCheck
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked ejecurtado")
  // }

  // // Se ejecuta una vez cuando el render del componente haya finalizado. Puede serte útil para realizar acciones programáticas que requieran que todo el HTML del componente ya este preparado.
  // ngAfterViewInit(): void {
  //   console.log("ngafterViewInit ejecurtado")
  // }

  // // Se ejecuta cuando se lanza el ngDoCheck
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked ejecurtado")
  // }
  
  // //Se ejecutará cuando se destruye el componente, por ejemplo, cuando se pasa a otra pestaña de otro componente en la web de Angular
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy ejecurtado")

  // }
}
