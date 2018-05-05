import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AppEventComponent } from './examples/event.component';
import { AppBindingComponent } from './examples/binding.component';
import { LoopComponent } from './examples/loop.component';
import { IfComponent } from './examples/if.component';
import { HighlightDirective } from './examples/hightlight.directive';
import { RecipesListingComponent } from './recipes/listing/recipes.listing.component';
import { RecipesCardComponent } from './recipes/card/recipes-card.component';
import { NotesComponent } from './notes/notes.component';
import { HelloService } from './services/hello.service';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppBindingComponent,
    AppEventComponent,
    LoopComponent,
    IfComponent,
    HighlightDirective,
    RecipesListingComponent,
    RecipesCardComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
