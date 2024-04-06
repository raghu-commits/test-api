import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { BeforeInsert, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @ApiProperty({ description: 'Name', example: 'John' })
  @Column({ type: 'varchar' })
  @Length(2, 30, {
    message:
      'The first name must be atleast 2 characters but not longer than 30 characters',
  })
  firstName: string;

  @ApiProperty({ description: 'Name', example: 'John' })
  @Column({ type: 'varchar' })
  @Length(2, 30, {
    message:
      'The first name must be atleast 2 characters but not longer than 30 characters',
  })
  lastName: string;

  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @IsNotEmpty()
  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @BeforeInsert()
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password || password, salt);
  }
}
