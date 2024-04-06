import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
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
