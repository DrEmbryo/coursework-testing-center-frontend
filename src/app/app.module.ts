
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

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'user',
    component: UserInfoPageComponent,
  },
  {
    path: 'test-list',
    component: TestListComponent,
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
  {
    path: 'test-result',
    component: ResultPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
