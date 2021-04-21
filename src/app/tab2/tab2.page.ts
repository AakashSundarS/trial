import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cards:any[];

  constructor(
    public dataService: DataServiceService
  ) {}

  ngOnInit(){
    this.dataService.currentToDoneCards.subscribe(data=>{
      this.cards = data;
    });
  }

}
