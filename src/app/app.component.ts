import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cursoangular';

  styles = {
    display: "flex",
    'flex-direction': "column",
    "align-items": "center",
    padding: "20px",
    width: "200px"
  }
}
