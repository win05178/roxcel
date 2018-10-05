import {Injectable} from '@angular/core';

@Injectable()
export class RegisterMsg {
  public static  message = {
    EN: {
      FULLNAME : 'Full Name',
      FULLNAMEPlaceholder: 'Michael Zenaty',
      EMAIL : 'Email Address',
      EMAILPlaceholder: 'john@deo.com',
      PASSWORD : 'Password',
      PASSWORDPlaceholder: 'Enter your password',
      accept : 'I accept',
      condition : 'Terms and Conditions',
      signUpFree : 'Sign Up Free',
      alreadyAccount : 'Already have an account?',
      signIn : 'Sign In'
    },
    TH: {
      FULLNAME : 'ชื่อ',
      FULLNAMEPlaceholder: 'Michael Zenaty',
      EMAIL : 'อีเมลล์',
      EMAILPlaceholder: 'john@deo.com',
      PASSWORD : 'รหัสผ่าน',
      PASSWORDPlaceholder: 'กรุณากรอกรหัสผ่าน',
      accept : 'ยอมรับ',
      condition : 'เงื่อนไข',
      signUpFree : 'สมัครฟรี',
      alreadyAccount : 'มีบัญชีอยู่แล้ว?',
      signIn : 'เข้าสู่ระบบ'
    }
  };
}
