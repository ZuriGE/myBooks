import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl , ValidationErrors, ValidatorFn} from '@angular/forms';
import { ResUser } from 'src/app/models/res-user';
import { UserService } from 'src/app/shared/user.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private formBuilder:FormBuilder, public userService:UserService){
    this.buildForm();
  }

  @Output() 



//   public register(){
//     const user = this.myForm.value;
// }

  public register(){
    const user = this.myForm.value;
    console.log('entra en la formula')
    this.userService.register(user).subscribe((res:ResUser)=>{
      console.log(res)
      if (res.error === false) {
        console.log('OK')
        this.myForm.reset();
        
        swal.fire({
                title: `Registro completado`,
                text: `El usuario '${user.name} ${user.last_name}' se ha registrado correctamente.`,
                icon: "success",
                confirmButtonColor: '#fd8945',
                background:'#d4d1ce',
                iconColor: 'green'
              })
      }else if(res.code==1){ 
        swal.fire({
          title: `ERROR:\nYa hay un usuario registrado con ese email`,
          text: `Utiliza otra dirección de correo o inicia sesión como '${user.email}'`,
          icon: "error",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'red'
        })
      }else{
        console.log('error')
      }
    })

}




  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      password: [,[ Validators.required, Validators.minLength(minPassLength), this.safePassword]],
      passwordRepeat: [,[Validators.required, this.checkPasswords]],
      photo: [, Validators.required],
      

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
  }else if(!control.value){
    resultado=null
  }
  return resultado
}


private checkPasswords(control: AbstractControl){
  let resultado = {matchPassword: true}
  if(control.parent?.value.password == control.value){
    resultado = null;
  }
  return resultado
}

showPassword: boolean = false;

showPw() {
  this.showPassword = !this.showPassword;
}

showPasswordRep: boolean = false;

showPwRepeat() {
  this.showPasswordRep = !this.showPasswordRep;
  console.log(this.showPasswordRep)
}

ngOnInit():void{}
}
