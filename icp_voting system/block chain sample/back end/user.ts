// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['aadharNumber', 'accountAddress'])
export class User {
  @Entity()
@Unique(['PrimaryGeneratedColumn()
  id: number;

aadharNumber', 'accountAddress'])
export class User {
  @PrimaryGeneratedColumn()
  id  @Column(): number
  aadharNumber: string;

  @Column();


  aadharNumber: string;

  @Column()
  account  @Column()Address: string;


  account  @Column()
  age: number;

Address: string;
  @Column()
  isRegister
ed:  @Column()
  age: number;

 boolean;

  @Column()
  isV  @Column()
  isRegisteroted: boolean;
ed: boolean;

 }