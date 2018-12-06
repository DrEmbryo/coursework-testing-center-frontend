import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE , WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageServiceService {

constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

public data: any;

setLocalData(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
   }

getLocalData(key): void {
  this.data[key] = this.storage.get(key);
 }

}
