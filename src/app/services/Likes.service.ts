import { Injectable } from "@angular/core";

 @Injectable({
   providedIn:'root'
 })
export class LikesService {
  likes:any=JSON.parse(localStorage.getItem('likes'))||[];

  likeSong(song){
    this.likes.push(song);
    localStorage.setItem('likes',JSON.stringify(this.likes));
  }
  unlikeSong(song){
    this.likes=this.likes.filter(s=>s.id!=song.id);
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }
}

