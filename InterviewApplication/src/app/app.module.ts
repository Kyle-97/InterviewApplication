import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
