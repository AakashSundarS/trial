import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';
import { AddCardComponent } from "./add-card/add-card.component";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  taskHeading: string = '';
  taskDesc: string = '';

  cards = [];

  constructor(
    public modalController: ModalController,
    public dataService: DataServiceService
    ) { 
    // this block runs whenever the component is activated for the 1st time 
  }

  ngOnInit(){
    this.dataService.currentHeading.subscribe(data=>{
      this.taskHeading = data;
    });

    this.dataService.currentDesc.subscribe(data=>{
      this.taskDesc = data;
    });
    
  }

  pushCards(){
    this.cards.push(
      {
        "taskHeading": this.taskHeading,
        "taskDesc": this.taskDesc,
      }
    )
  }
   
  async addCard(){
    // asynchronous => js => in-built feature 
    const modal = await this.modalController.create({
      component: AddCardComponent,
    });
    return await modal.present();
  }
  moveCard(){
    console.log('card moved!');  
  }

  dlteCard(){
    console.log('card deleted!');
  }

}
