import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginRequestDto } from './dto/login-request.dto';

@ApiTags('Authentication')
@Controller('authenticate')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  authenticate(
    @Body() credentials: LoginRequestDto,
  ): Promise<{ access_token: string }> {
    return this.authService.validate(credentials);
  }
}
