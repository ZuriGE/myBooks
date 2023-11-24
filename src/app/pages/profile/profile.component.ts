import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ResUser } from 'src/app/models/res-user';
import { FormGroup, FormBuilder, Validators, AbstractControl , ValidationErrors, ValidatorFn} from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // myUser = new User("Patrick", "Rothfuss", "termina@tusaga.com", "/assets/img/rothfuss.jpg","Contraseñ@1")

  public myForm: FormGroup
  myUser = this.userService.user
  updatedUser:User
 
  userUpdated;
  myColor;


  new_name;
  new_last_name;
  new_email;
  new_photo;
  new_password;

  enviar(name, lastName, email, photo, password){
    // console.log(this.myUser.name)
    
        // this.myUser.name = name.value !="" ? name.value : this.myUser.name;
        // this.myUser.last_name = lastName.value !="" ?lastName.value: this.myUser.last_name ;
        // this.myUser.email = email.value !="" ? email.value : this.myUser.email ;
        // this.myUser.photo = photo.value !="" ? photo.value : this.myUser.photo;
    
        
    
        // if (name.value !="" || lastName.value !="" ||email.value !="" ||photo.value !="" ){
        //   this.userUpdated = "Usuario actualizado";
        //   this.myColor = "green"
        // }else{
        //   this.userUpdated = "No se ha detectado ningún cambio"
        //   this.myColor = "red"

        

 
   
    // this.userService.updateUserData(this.updatedUser).subscribe((res:ResUser)=>{
    //   if (res.error === false) {
    //     console.log('OK')
    // }else{
    //   console.log('error')
    // }})
 
  }

  update(){
    if (this.myForm.valid) {
    const user = this.myForm.value

    user.id_user = this.myUser.id_user

    this.userService.updateUserData(user).subscribe((res:ResUser)=>{
      if (res.error === false) {
        console.log('OK')
        this.myForm.reset();
        
        swal.fire({
                title: `Datos actualizados`,
                // text: `El usuario '${user.name} ${user.last_name}' se ha registrado correctamente.`,
                icon: "success",
                confirmButtonColor: '#fd8945',
                background:'#d4d1ce',
                iconColor: 'green'
              })
      
      this.myUser.name = user.name || this.myUser.name
      this.myUser.last_name = user.last_name || this.myUser.last_name
      this.myUser.email = user.email || this.myUser.email
      this.myUser.photo = user.photo || this.myUser.photo
      this.myUser.password = user.password || this.myUser.password
      
      }else if(res.code==1){ 
        swal.fire({
          title: `ERROR:\n`,
          text: `No se han podido modificar los datos`,
          icon: "error",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'red'
        })
      }else{
        console.log('error')
      }
    })}else{
      console.log("error validación")
      swal.fire({
        title: `ERROR: Revisa los campos marcados en rojo`,
        text: `El email debe tener un formato correcto.\nRecuerda que la contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número.`,
        icon: "error",
        confirmButtonColor: '#fd8945',
        background:'#d4d1ce',
        iconColor: 'red'
      })
    }
    
  //   this.updatedUser.name = name.value !="" ? name.value : this.myUser.name;
  //   this.updatedUser.last_name = lastName.value !="" ?lastName.value: this.myUser.last_name ;
  //   this.updatedUser.email = email.value !="" ? email.value : this.myUser.email ;
  //   this.updatedUser.photo = photo.value !="" ? photo.value : this.myUser.photo;
  //   this.updatedUser.password = password.value !="" ? password.value : this.myUser.password;
  //   this.updatedUser.id_user= this.myUser.id_user;
  }

  constructor(private userService: UserService, private formBuilder:FormBuilder,){
    this.buildForm()
  }

  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [null],
      last_name: [null],
      email: [null, [Validators.email]],
      password: [null, [Validators.minLength(minPassLength), this.safePassword]],
      photo: [null ],
      

    })
  }

  private safePassword(control: AbstractControl){
    let resultado = {passwordUnsafe: true}
   
    const hasUpperCase = /[A-Z]+/.test(control.value);
    const hasLowerCase = /[a-z]+/.test(control.value);
    const hasNumeric = /[0-9]+/.test(control.value);
  
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric
  
    if (passwordValid){
      resultado=null
    }else {
      resultado={ passwordUnsafe: true };
    }
    return resultado
  }

  }



