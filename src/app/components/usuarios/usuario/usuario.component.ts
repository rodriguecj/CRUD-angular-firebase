import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Model/usuario';

import { UsuariosService } from '../../../services/usuarios.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit{
  public title = 'Form';
  public usuario:Usuario
  constructor(
    public _usuariosService: UsuariosService
  ){
    //console.log(this.title)
    this.usuario = new Usuario()
  }
  ngOnInit(){
    /*this._usuariosService.getUsers().subscribe(list=>{
      console.log(list)
    })*/
    this.resetForm
  }
  onSubmit(value){
    if(value.value.$key ==null)
      this._usuariosService.insertUser(value.value)
    else
      this._usuariosService.updateUser(value.value)
    this.resetForm(value)
  }
  resetForm(formcontact?: NgForm){
    if(formcontact != null){
      formcontact.reset()
      this._usuariosService.selectedUser = new Usuario()
    }
  }
}