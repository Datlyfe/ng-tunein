import { EventEmitter } from "@angular/core";

export class EbusService {
  public ebus :EventEmitter<any>;
  constructor(){
    this.ebus= new EventEmitter();
  }
}

