import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrudCardComponent } from './crud-card/crud-card.component';
import { FlashcardStudyComponent } from './flashcard-study/flashcard-study.component';
import { CrammingComponent } from './cramming/cramming.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './service/authguard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardListComponent,
    CardComponent,
    CardOverviewComponent,
    PageNotFoundComponent,
    CrudCardComponent,
    FlashcardStudyComponent,
    CrammingComponent,
    LearnComponent,
    LoginComponent,
    SignupComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
