import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavModule } from './modules/side-nav/side-nav.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
