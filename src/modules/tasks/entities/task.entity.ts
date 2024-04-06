import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ nullable: true, default: false })
  isCompleted: boolean;

  @Column({ nullable: true, default: false })
  isImportant: boolean;
}
