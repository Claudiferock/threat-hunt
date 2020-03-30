import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'
import { Lazy } from '../helpers'
import { Skill } from './skill'
import { Attribute } from "./attribute"
import { TElement } from '../types/element'

@Entity()
@ObjectType()
export class Threat {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  imgUrl: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  backStory: string

  @Field(type => [Skill])
  @ManyToMany(type => Skill, { lazy: true, cascade: ['insert'] })
  @JoinTable()
  skills: Lazy<Skill[]>

  @Field(type => [Attribute])
  @ManyToMany(type => Attribute, { lazy: true, cascade: ['insert'] })
  @JoinTable()
  attributes: Lazy<Attribute[]>

  @Field()
  @Column()
  resistance: TElement

  @Field()
  @Column()
  weakness: TElement

  @Field()
  @Column()
  healthpoints: number

  @Field()
  @Column()
  mana: number

}
