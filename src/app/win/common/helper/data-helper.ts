import {Injectable} from '@angular/core';

@Injectable()
export class DataHelper {
  public static  isNotNull(value: any) {
    return (!(value === undefined || value === null || value === ''));
  }
  public static  isNull(value: any) {
    return ((value === undefined || value === null || value === ''));
  }
}
