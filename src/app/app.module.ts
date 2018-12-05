import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'user',
    component: UserInfoPageComponent,
  },
  {
  path: '**',
  component: LoginPageComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserInfoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
