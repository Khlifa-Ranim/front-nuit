import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../Login.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nom: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }


  public onLogin(loginForm: NgForm): void {
    if (loginForm.valid) {

      this.loginService.LoginIn(loginForm.value).subscribe(
        (response) => {
          console.log('Logged in successfully:', response);
          // Handle successful login here
         
          // or where you want to redirect after update
          console.log('Logged in successfully:', this.nom);
          // this.loginService.login();
                    this.router.navigate(['/listRessource']); 



        },
        (error: HttpErrorResponse) => {
          console.error('Login failed:', error.error);
          alert(error.error); // or handle the error more gracefully

        }
      );
    } else {
      console.error('Form is not valid');
    }
  }

  

  
}
