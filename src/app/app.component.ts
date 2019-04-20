import { Component } from '@angular/core';
import { Usuario } from './Model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Formulario';
  public usuario:Usuario
  constructor(){
    //console.log(this.title)
    this.usuario = new Usuario()
  }
  onSubmit(value){
    console.log(value)
  }
}
