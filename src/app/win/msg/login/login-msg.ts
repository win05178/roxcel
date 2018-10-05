import {Injectable} from '@angular/core';

@Injectable()
export class LoginMsg {
  public static  message = {
    EN: {
      userName: 'Email address',
      userNamePlaceholder: 'Enter your email',
      forgetPassword: 'Forgot your password?',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      login: 'Login',
      noHaveAccount: 'Don\'t have an account?',
      signUp: 'Sign Up'
    },
    TH: {
      userName : 'อีเมลล์',
      userNamePlaceholder : 'กรุณากรอก อีเมลล์',
      forgetPassword: 'ลืมรหัสผ่าน?',
      password : 'รหัสผ่าน',
      passwordPlaceholder : 'กรุณากรอก รหัสผ่าน',
      rememberMe : 'จดจำฉัน',
      login : 'เข้าสู่ระบบ',
      noHaveAccount: 'ไม่มีบัญชี',
      signUp: 'สมัครสมาชิก'
    }
  };
}
