import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../../Model/usuario'

import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  public title:string = 'Users List'
  userList: Usuario[]
  constructor(
    private _usuariosService: UsuariosService,
    private _toastr: ToastrService
  ) {}
  ngOnInit() {
    this._usuariosService.getUsers().subscribe(list=>{
      this.userList = []
      list.forEach(item=>{
        let x = item.payload.toJSON()
        x['$key'] = item.key
        this.userList.push(x as Usuario) 
      })
      //console.log(this.userList)
    })
  }
  onEdit(user: Usuario){
    //console.log(user)
    this._usuariosService.selectedUser = Object.assign({},user)
  } 
  onDelete($key:string){
    if(confirm('Delete?'))
    this._usuariosService.deleteUser($key)
    this._toastr.success('Success Delete','Deleted!!')
  }
}
