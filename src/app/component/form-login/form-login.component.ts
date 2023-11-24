import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ResUser } from 'src/app/models/res-user';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  public login:Login

  constructor(public userService:UserService, private router:Router){
    this.login = new Login
  }
    ngOnInit():void{ }

    
    onSubmit(form:NgForm):void{
      console.log("fomr login component")
      this.userService.login(this.login).subscribe((res:ResUser)=>{

        if (res.error === false){
          this.userService.user = res.data[0];
          this.userService.loggedIn= true
          this.router.navigate(['books'])
        }else if(res.code==2){
          swal.fire({
            title: `ERROR:`,
            text: `El email y/o la contraseña introducidos son incorrectos.`,
            icon: "error",
            confirmButtonColor: '#fd8945',
            background:'#d4d1ce',
            iconColor: 'red'
          })
        } else{
          console.log("ERROR"+res)
        }



      })
   
    }
    
  }
  

 


