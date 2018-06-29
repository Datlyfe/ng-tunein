import { Component, OnInit, HostBinding } from '@angular/core';
import Genres from "../../static/GenresMap";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  @HostBinding('class') discover:string='Discover';
  constructor(){
    this.getGenre(2098157264,132);
  }

  genres=Genres;
  genreId:132;
  playlistId:2098157264;


  ngOnInit() {
  }

  getGenre(playlistId,genreId){
    this.playlistId=playlistId
    this.genreId=genreId;
  }

}
