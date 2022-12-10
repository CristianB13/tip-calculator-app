import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
