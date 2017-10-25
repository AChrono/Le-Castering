import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './header/controller/header.component';
import { AppFooter } from './footer/controller/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
