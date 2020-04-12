import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { SnapMessageComponent } from './snap-message/snap-message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMessageComponent,
    SnapMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
