import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'
import { Lazy } from '../helpers'
import { Hero } from '../entities/hero'
import { TElement } from '../types/element';

@Entity()
@ObjectType()
export class Skill {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToMany(type => Hero, { lazy: true })
  heroes: Lazy<Hero[]>

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  damage: number

  @Field()
  @Column()
  element: TElement
}
