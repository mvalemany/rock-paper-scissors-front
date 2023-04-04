import { MatchComponent } from 'src/app/pages/match/match.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { GameComponent } from 'src/app/pages/game/game.component';
import { ScoresComponent } from 'src/app/pages/scores/scores.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,    
    AnimatedButtonComponent,
    HomeComponent,
    GameComponent,
    ScoresComponent,
    HeaderComponent,
    MatchComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
