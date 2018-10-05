import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {InputForm} from '../common/enum/input-form.enum';
import {RegisterMsg} from '../msg/register/register-msg';
import {LocaleService} from '../common/service/locale-service';
import {DataHelper} from '../common/helper/data-helper';
import {HttpService} from '../common/service/http.service';

@Component({
  selector: 'win-register',
  templateUrl: './win-register.component.html',
  styleUrls: ['./win-register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WinRegisterComponent implements OnInit {

  @Input('inputRegister') inputRegister = [InputForm.FullName, InputForm.Email, InputForm.Password];
  @Input('message')  message: object  = RegisterMsg.message;
  @Input('url') url: String = null;
  model: object = {} ;
  locale = LocaleService.getLocale();

  @Output('onClickSignUp')  onClickSignUp: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signUp() {

    if (DataHelper.isNull(this.url)) {
      this.onClickSignUp.emit();
    } else {
      this.http.post(this.url, this.model, null);
    }

  }

}
