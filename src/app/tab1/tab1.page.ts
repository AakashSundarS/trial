import { Component} from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
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
    public animationCtrl: AnimationController,
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

    this.dataService.toDoCards.subscribe(data=>{
      this.cards = data;
    });

  }
   
  async addCard(){

    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)', height: '30%', width: '90%', borderRadius: '10px'},
        { offset: 1, opacity: '1', transform: 'scale(1)', height: '30%', width: '90%', borderRadius: '10px'},
      ]);

      return this.animationCtrl.create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
      };

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    const modal = await this.modalController.create({
      component: AddCardComponent,
      enterAnimation,
      leaveAnimation
    });
    console.log(modal.presentingElement);
    
    return await modal.present();
  }
  moveCard(item:any){
    console.log(item);
    this.dataService.pushDoneCard(item);
    console.log('card moved!');  
  }

  dlteCard(item:any){
    console.log('card deleted!');
    console.log(item);
  }

}
