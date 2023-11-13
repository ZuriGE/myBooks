import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  isVisible = false;

  navMenu = [
    {name:"Home", link:"/"},
    {name:"Register", link:"/register"},
    {name:"Profile", link:"/profile"},
    {name:"Books", link:"/books"},
    {name:"Add", link:"/add-book"},
    {name:"Update", link:"/update-book"},
    {name:"Login", link:"/login"},
   
  ]
  
}


