import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.service.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['home']);
    }, (error) => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      console.log(error)
    });      
  }
  toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
}
