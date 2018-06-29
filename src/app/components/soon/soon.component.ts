import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.scss']
})
export class SoonComponent implements OnInit {
  @HostBinding('class') workClass:string='work';

  constructor() { }

  ngOnInit() {
  }

}
