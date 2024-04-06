import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginRequestDto {
  @ApiProperty({ description: 'email', example: 'johndoe@abc.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  username: string;

  @ApiProperty({ description: 'password', example: '123' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
