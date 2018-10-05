import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { WinLoginComponent } from './win-login/win-login.component';
import { WinRegisterComponent } from './win-register/win-register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, HttpModule
  ],
  declarations: [WinLoginComponent, WinRegisterComponent],
  exports:      [ WinLoginComponent, WinRegisterComponent]
})
export class WinModule {

}
