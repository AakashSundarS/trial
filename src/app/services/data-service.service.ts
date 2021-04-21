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
  
  public toDoCards: BehaviorSubject<any[]> = new BehaviorSubject <any[]> ([]);
  currentToDoCards = this.toDoCards.asObservable();

  public toDoneCards: BehaviorSubject<any[]> = new BehaviorSubject <any[]> ([]);
  currentToDoneCards = this.toDoneCards.asObservable();

  showingToDoCards = [];
  showingDoneCards = [];
  showingHeading: any;
  showingDesc: any;
  constructor() { 
    this.currentToDoCards.subscribe(data=>{
      this.showingToDoCards = data;
    });
    this.currentToDoneCards.subscribe(data=>{
      this.showingDoneCards = data;
    });
    this.currentHeading.subscribe(data=>{
      this.showingHeading = data;
    });
    this.currentDesc.subscribe(data=>{
      this.showingDesc = data;
    });
  }

  pushToDoCards(){
    this.showingToDoCards.push(
      {
        "taskHeading": this.showingHeading,
        "taskDesc": this.showingDesc,
      }
    )
  }

  pushDoneCard(item:any){
    let temp = [];
    this.showingToDoCards.forEach(i=>{
      if(!(item == i)){
        temp.push(i);
      }
      else{
        this.showingDoneCards.push(i);
      }
    });
    this.showingToDoCards = temp;
    // data-event emmit!!!!

    this.toDoCards.next(this.showingToDoCards);
    this.toDoneCards.next(this.showingDoneCards);
  }
}
