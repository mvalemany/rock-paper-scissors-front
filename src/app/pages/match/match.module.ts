import { GameService } from 'src/app/pages/game/service/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchComponent } from 'src/app/pages/match/match.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [MatchComponent],  
})
export class MatchModule { }