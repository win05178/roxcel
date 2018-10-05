import {Injectable} from '@angular/core';
import {DataHelper} from '../helper/data-helper';
import {Lang} from '../enum/lang.enum';

@Injectable()
export class LocaleService {
  public static getLocale() {
    return (DataHelper.isNotNull(window.localStorage.getItem('locale'))) ? window.localStorage.getItem('locale') : Lang.TH;
  }
}
