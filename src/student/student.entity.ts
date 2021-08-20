import {
  Column,
  Entity,
  Generated,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
