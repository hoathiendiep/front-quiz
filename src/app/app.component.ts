import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    
  }
//   title = 'front-quiz';
//   constructor(private authService: AuthenticationService,private router: Router) {
//   if (!this.authService.isUserLoggedIn()) {
//     this.router.navigate(['login']);
//   }
// }

// constructor(private oauthService: OAuthService,private router: Router) {

//   // this.oauthService.configure(authConfig);
//   this.oauthService.tokenValidationHandler = new JwksValidationHandler();

//   this.oauthService.loadDiscoveryDocument().then((doc) => {
// this.oauthService.tryLogin()
//   .catch(err => {
//     console.error(err);
//   })
//   .then(() => {
//     if(!this.oauthService.hasValidAccessToken()) {
//       // this.oauthService.initImplicitFlow()
//       this.router.navigate(['login']);
//     }

//   });
// });
// }

// private ConfigureImplicitFlowAuthentication(router: Router) {

//   // this.oauthService.configure(authConfig);

//   this.oauthService.tokenValidationHandler = new JwksValidationHandler();

//   this.oauthService.loadDiscoveryDocument().then((doc) => {
// this.oauthService.tryLogin()
//   .catch(err => {
//     console.error(err);
//   })
//   .then(() => {
//     if(!this.oauthService.hasValidAccessToken()) {
//       // this.oauthService.initImplicitFlow()
//       this.router.navigate(['login']);
//     }

//   });
// });
// }
}
