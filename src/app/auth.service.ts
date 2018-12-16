import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  haveToken = false;

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for ( let i = 0; i < ca.length; i++ ) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

   deleteCookie(cname) {
    const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = cname + '=;' + expires + ';path=/';
  }

  checkToken () {
    if (this.getCookie('token') === '') {
      return this.haveToken = false;
    } else {
      return this.haveToken = true;
    }
  }
}
