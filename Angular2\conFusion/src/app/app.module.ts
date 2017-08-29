import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent, PizzaPartyComponent, DialogOverviewExampleDialog } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaPartyComponent, 
    DialogOverviewExampleDialog, MenuComponent, DishdetailComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogOverviewExampleDialog, PizzaPartyComponent],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
