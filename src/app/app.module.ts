import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    RadioButtonComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
