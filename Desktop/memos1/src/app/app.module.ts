import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MComponent } from './components/m/m.component';
import { MemoComponent } from './component/memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    MComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
