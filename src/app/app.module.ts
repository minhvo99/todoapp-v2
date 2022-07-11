import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ListComponentComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
