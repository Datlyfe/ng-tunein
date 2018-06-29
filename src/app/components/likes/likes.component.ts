import { Component, OnInit, HostBinding } from '@angular/core';
import {isLiked,abbreviate,shorten} from "../../helpers";
import {LikesService} from '../../services/Likes.service';
import { EbusService } from '../../services/Ebus.service';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent{

  @HostBinding('class') LikesClass:string ='Likes animated fadeIn';


  constructor(public love:LikesService,public ebus:EbusService) {
   }



  shorten(a,b){
    return shorten(a,b);
  }

  removeFav(song){
     this.love.unlikeSong(song);
  }

  cue(song){
    this.ebus.ebus.emit({song,autoplay:false});
  }

}
