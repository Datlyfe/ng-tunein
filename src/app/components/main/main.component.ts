import { Component,HostBinding } from '@angular/core';


@Component({
  selector: '[appMain]',
  templateUrl: './main.component.html',
})
export class MainComponent{

  @HostBinding('class') mainClass:string ='main';

}
