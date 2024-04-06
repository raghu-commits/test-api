import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
