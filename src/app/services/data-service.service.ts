import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public heading: BehaviorSubject<string> = new BehaviorSubject <string> ("");
  currentHeading = this.heading.asObservable();

  public desc: BehaviorSubject<string> = new BehaviorSubject <string> ("");
  currentDesc = this.desc.asObservable();

  constructor() { }

}
