import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user : any = {}

constructor(private userservice : AuthentificationService, private router : Router){}

register(){
  const userData = {
    username : this.user.username,
    email:this.user.email,
    password: this.user.password,
    role : this.user.role
  }
  this.userservice.registerUser(userData).subscribe(
    (response) => {
      console.log(response);
      alert('Inscription réussir:')
      this.router.navigate(['/'])
    },
    (error) => {
      console.log(`Error lors de l'inscription ${error}`);
      
    }
  )
}
}
