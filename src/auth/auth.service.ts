import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'Signup';
  }
  login() {
    return 'Login';
  }
}
