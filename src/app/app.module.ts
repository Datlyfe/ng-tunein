import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { CueComponent } from './components/cue/cue.component';
import { FeedComponent } from './components/feed/feed.component';
import { DzService } from './services/Dz.service';
import { DiscoverComponent } from './components/discover/discover.component';
import { SoonComponent } from './components/soon/soon.component';
import { SearchComponent } from './components/search/search.component';
import { LikesComponent } from './components/likes/likes.component';
import { EbusService } from './services/Ebus.service';
import { LikesService } from './services/Likes.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    CueComponent,
    FeedComponent,
    DiscoverComponent,
    SoonComponent,
    SearchComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
    
  ],
  providers: [DzService,EbusService,LikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
