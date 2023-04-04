import { HttpClientModule } from '@angular/common/http';
import { GameService } from './service/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [GameService],
  bootstrap: [GameComponent],  
})
export class GameModule { }
