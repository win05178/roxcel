import { BrowserModule } from '@angular/platform-browser';
import { WinModule } from './win/win.module';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
