import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import store from "./cache";


@Injectable()
export class DzService{
  constructor(private http:HttpClient){}
  call(url){
    if(store.has(url)) return store.get(url);
    return this.http.jsonp(url,'callback')
    .pipe(map((response:any)=>{
      return store.set(response.data,url)
    }))
  }
  playlist(id){
    let url = `https://api.deezer.com/playlist/${id}/tracks?output=jsonp`;
    return this.call(url);
  }
  search(term){
    let url = `https://api.deezer.com/search?q=${term}&output=jsonp&limit=24`;
    return this.call(url);
  }
}