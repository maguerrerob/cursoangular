import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  name = "Manolito"
  surname = "Pérez"
  age = 22
  married = true
  address = {
    country: "ES",
    city: "Sevilla",
    street: "Ave del Paraíso"
  }
  private dni = "76146503S"
  public nationality = "Española"

  // En la interpolación de datos se ejecuta la función cada vez que detecte un cambio en la interfaz del usuario con la template
  getDate() {
    return new Date()
  }
}
