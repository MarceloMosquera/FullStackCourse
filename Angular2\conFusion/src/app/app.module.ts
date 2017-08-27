import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent, PizzaPartyComponent, DialogOverviewExampleDialog } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaPartyComponent, 
    DialogOverviewExampleDialog, MenuComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogOverviewExampleDialog, PizzaPartyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
