import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Lang} from '../common/enum/lang.enum';
import {LoginMsg} from '../msg/login/login-msg';
import {TypeInputUserName} from '../common/enum/type-user-name.enum';
import {LocaleService} from '../common/service/locale-service';

@Component({
  selector: 'win-login',
  templateUrl: './win-login.component.html',
  styleUrls: ['./win-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WinLoginComponent implements OnInit {
  @Input('typeUserName') typeUserName = TypeInputUserName.email;
  @Input('message')  message: object  = LoginMsg.message;
  @Input('allowRegister')  allowRegister: Boolean  = true;

  @Output('onClickRegister')  onClickRegister: EventEmitter<any> = new EventEmitter();


  locale = LocaleService.getLocale();

  constructor() {}

  ngOnInit() {
  }

  register() {
    this.onClickRegister.emit();
  }

}
