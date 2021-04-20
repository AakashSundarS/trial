import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../services/data-service.service";
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {

  taskHeading: string;
  taskDescription: string;

  constructor(
    public dataService: DataServiceService
  ) { }

  ngOnInit() {}

  getInput(str: string, ev: any){
    switch (str) {
      case 'heading':
        this.taskHeading = ev.target.value;
        this.dataService.heading.next(this.taskHeading);
        break;

      case 'description':
        this.taskDescription = ev.target.value; 
        this.dataService.desc.next(this.taskDescription);
        break;
  
      default:
        break;
    }
  }

}
