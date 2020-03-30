import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'
import { Lazy } from '../helpers'
import { Hero } from '../entities/hero'

@Entity()
@ObjectType()
export class Attribute {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToMany(type => Hero, { lazy: true })
  heroes: Lazy<Hero[]>

  @Field()
  @Column()
  strength: number

  @Field()
  @Column()
  intelligence: number

  @Field()
  @Column()
  stamina: number

  @Field()
  @Column()
  agility: number

  @Field()
  @Column()
  speed: number
}
