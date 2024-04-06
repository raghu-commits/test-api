import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from './dto/login-request.dto';

@Injectable()
export class AuthService {
  validate(credentials: LoginRequestDto): boolean {
    if (credentials) return true;
    else return false;
  }
}
