import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AppEventComponent } from './examples/event.component';
import { AppBindingComponent } from './examples/binding.component';
import { LoopComponent } from './examples/loop.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppBindingComponent,
    AppEventComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
