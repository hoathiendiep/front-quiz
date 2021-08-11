import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { CrammingComponent } from './cramming/cramming.component';
import { CrudCardComponent } from './crud-card/crud-card.component';
import { FlashcardStudyComponent } from './flashcard-study/flashcard-study.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './service/authguard.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: CardListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: "detail", component: CardOverviewComponent, canActivate: [AuthGuard] },
  { path: "edit", component: CrudCardComponent, canActivate: [AuthGuard] },
  { path: "flashcard_study", component: FlashcardStudyComponent, canActivate: [AuthGuard] },
  { path: "cramming", component: CrammingComponent, canActivate: [AuthGuard] },
  { path: "learn", component: LearnComponent, canActivate: [AuthGuard] },
  { path: "test", component: TestComponent, canActivate: [AuthGuard] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
