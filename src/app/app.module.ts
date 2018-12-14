
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'user',
    component: UserInfoPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test-list',
    component: TestListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test/:id',
    component: TestPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test-result/:id',
    component: ResultPageComponent,
    canActivate: [AuthGuard]
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
    UserInfoPageComponent,
    TestListComponent,
    TestPageComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
