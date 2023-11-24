import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent  {
  isVisible = false;
  activeLink='';
  loggedIn;
  navMenu1 =  [
    { name: 'Home', link: '/' },
    { name: 'Register', link: '/register' },
    { name: 'Login', link: '/login' },
  ];


  navMenu2 =  [
    { name: 'Home', link: '/' },
    { name: 'Profile', link: '/profile' },
    { name: 'Books', link: '/books' },
    { name: 'Add', link: '/add-book' },
    { name: 'Update', link: '/update-book' },
  ];


  constructor(private userService: UserService, private router: Router) {}
  
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.loggedIn = this.userService.loggedIn;
      }
    })
  }

  activeNav(link){
    this.activeLink=link
    
  }
  
}


