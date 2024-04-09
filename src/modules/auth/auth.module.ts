import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { JwtModule, JwtModuleAsyncOptions } from '@nestjs/jwt';
import appConfig from '../../config/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';

const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return { secret: appConfig().appSecret, signOptions: { expiresIn: '1d' } };
  },
};

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
})
export class AuthModule {}
