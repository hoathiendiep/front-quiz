import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  username: string;
  password: string;
  client_id = 'Pqv5OWBV7g8gAaIqEdly8buWxxUa';
  secret_id = 'd7n__SBxah6RbwrLc_OmuQiW66Ua';
  userProfile: any;
  accessToken: string;
  refreshToken: string;
  constructor(private http: HttpClient) {

  }
  authenticationService(username: string, password: string) {

    let headers = {
      'Authorization': 'Basic ' + window.btoa(this.client_id + ":" + this.secret_id),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    this.username = username;
    this.password = password;
    let body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('scope', 'openid');

    return this.http.post('https://localhost:9443/oauth2/token', body, { headers })
      .pipe(map((data) => {
        this.saveToken(data);
      }));
  }
  saveToken(token) {
    this.accessToken = token.access_token;
    this.refreshToken = token.refresh_token;
    this.userProfile = this.getUserProfile();
    let expireTime =  new Date().getTime() + token.expires_in*1000;
    localStorage.setItem("expires_at", expireTime.toString());
    console.log("accessToken: "+this.accessToken);
    console.log('refresh_token '+ this.refreshToken);
  }
  getUserProfile(){
    let headers = {
      'Authorization': 'Bearer ' + this.accessToken,
        }
    return this.http.get('https://localhost:9443/oauth2/userinfo?schema=openid', { headers })
      .subscribe(data => {
        return data;
    })  ;
  }
  logout() {
    // Remove tokens, profile, and expiration data
    localStorage.removeItem('expires_at');
    this.accessToken = undefined;
    this.userProfile = undefined;
  }

  isUserLoggedIn() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return (Date.now() < expiresAt) && this.accessToken && this.userProfile;
  }

  refreshAccessToken(){
    let headers = {
      'Authorization': 'Basic ' + window.btoa(this.client_id + ":" + this.secret_id),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    let body = new HttpParams()
    .set('refresh_token', this.refreshToken)
    .set('grant_type', 'refresh_token');
    this.http.post('https://localhost:9443/oauth2/token', body, { headers })
      .subscribe((data) => {
        console.log("new accesstoken:/n "+data)
        this.saveToken(data);
      });
  }

  getLoggedInUserName() {
    return this.userProfile
  }
}
