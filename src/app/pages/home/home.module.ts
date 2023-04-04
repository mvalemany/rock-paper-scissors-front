import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedButtonComponent } from 'src/app/components/animated-button/animated-button.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [    
    AnimatedButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],  
})
export class HomeModule { }
