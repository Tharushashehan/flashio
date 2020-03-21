import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight) {}

  toggleBtnState: boolean;
  onToggle($event):void{
    console.log("Clicked on toggle button");
    console.log(this.toggleBtnState);
    if(this.toggleBtnState){
      this.flashlight.switchOn();
    }else{
      this.flashlight.switchOff();
    }
    
  }
}
