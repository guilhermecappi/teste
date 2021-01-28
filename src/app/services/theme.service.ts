import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  subject = new Subject;

  constructor() { }

  sendTheme(theme){
    this.subject.next(theme);
  }
  recieveTheme(){
    return this.subject.asObservable();
  }
}
