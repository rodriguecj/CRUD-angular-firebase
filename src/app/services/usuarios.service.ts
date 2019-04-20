import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario'

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  userList:any[]
  selectedUser: Usuario = new Usuario()
  constructor(
    private firebase: AngularFireDatabase
  ) {
      firebase.list('users').valueChanges()   // returns observable
      .subscribe(list=> {
      this.userList = list;
      //console.log(this.userList);
   });

  }

  getUsers(){
    return this.firebase.list('users').snapshotChanges()
     // returns observable  valueChanges() .snapshotChanges()
  }
  insertUser(user:Usuario){
    return this.firebase.list('users').push({
      name: user.name,
      lastname: user.lastname,
      email: user.email
    })
  }
  updateUser(user:Usuario){
    return this.firebase.list('users').update(user.$key, {
      name: user.name,
      lastname: user.lastname,
      email: user.email
    })
  }
  deleteUser($key:string){
    return this.firebase.list('users').remove($key)
  }
}
