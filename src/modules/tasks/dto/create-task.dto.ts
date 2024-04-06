import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description:
      'Enter a short description of the  task that needs to be tracked',
    example: 'Go for a walk',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean = false;

  @IsOptional()
  @IsBoolean()
  isImportant: boolean = false;
}
