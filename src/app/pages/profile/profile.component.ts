import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myUser = new User("Patrick", "Rothfuss", "termina@tusaga.com", "/assets/img/rothfuss.jpg","Contraseñ@1")
 
  userUpdated;
  myColor;


  new_name;
  new_last_name;
  new_email;
  new_photo;

  enviar(name, lastName, email, photo){
    console.log(this.myUser.name)
 

    this.myUser.name = name.value !="" ? name.value : this.myUser.name;
    this.myUser.last_name = lastName.value !="" ?lastName.value: this.myUser.last_name ;
    this.myUser.email = email.value !="" ? email.value : this.myUser.email ;
    this.myUser.photo = photo.value !="" ? photo.value : this.myUser.photo;

    

    if (name.value !="" || lastName.value !="" ||email.value !="" ||photo.value !="" ){
      this.userUpdated = "Usuario actualizado";
      this.myColor = "green"
    }else{
      this.userUpdated = "No se ha detectado ningún cambio"
      this.myColor = "red"
  }

  }

}
