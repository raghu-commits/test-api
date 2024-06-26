import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginRequestDto } from './dto/login-request.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validate(_credentials: LoginRequestDto) {
    const user = await this.usersService.findOneByEmail(_credentials.username);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(_credentials.password, user.password))) {
      throw new UnauthorizedException();
    }
    return this.generateToken(user);
  }

  async generateToken(
    user: User,
  ): Promise<{ access_token: string; name: string; userId: number }> {
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.id,
      }),
      name: user.firstName + ' ' + user.lastName,
      userId: user.id,
    };
  }
}
