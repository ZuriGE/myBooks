import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl , ValidationErrors, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }

  public register(){
    const user = this.myForm.value;
}

  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      surname: [, Validators.required],
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
