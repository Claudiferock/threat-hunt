import { getRepository } from 'typeorm'
import { Hero } from './entities/hero'
import { TElement } from './types/element'

const PORCU = {
  name: 'Porcu',
  imgUrl: 'http://localhost:8080/public/porcu.png',
  description: `
    Using his wit and engineering skills, Porcu has created an awesome suit which shoots Plasma lazers and uses immense strength to overcome his opponents. He is pretty slow though and his suit has weaknesses.
  `,
  backStory: `
    Porcu used to live a peaceful life. He lived in the Coral Reefs of the Vast Sea, right next to city of Delareum. But that wicked night changed everything. \n
    City of Delareum was not too organized and it was lead by scoundrels and thugs. They had planned for some while now to steal the riches of Coral Reef, and during the night they came. \n
    Porcu barely managed to get away, but he wasn't able to save his fiancé. Next day he went back to the Reefs to recover his suit from his hideout. \n
    When he saw the destruction he vowed to have his revenge on his loved one and replenish world from evil.
  `,
  strength: 80,
  intelligence: 60,
  stamina: 100,
  healthpoints: 800,
  mana: 0,
  agility: 20,
  speed: 40,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  skills: [
    {
      name: 'Plasma beam',
      damage: 200,
      element: 'Plasma',
      description: 'Hurls a beam of plasma from his central core.'
    },
    {
      name: 'Sneaky punch',
      damage: 25,
      element: 'Physical',
      description: 'Porcu spins right arm really fast as a decoy, then quickly punches with his left straight to the opponents face.'
    }
  ]
}

const LISA = {
  name: 'Lisa McAllister',
  imgUrl: 'http://localhost:8080/public/lisa.png',
  description: `
    With her beloved revolver called React and super-human precision, Lisa can shoot a target from a mile away. She also carries a stack of dynamites and a lasso.
 `,
  backStory: `
    Coming from a wealthy family of McAllisters, Lisa had a joyful childhood. Though as the day went by at the helping her family with upkeeping the farm and raking leaves she found herself quite bored. She said that to her father. Being a huntsman and the head of the family, Joe McAllister decided to teach his daughter to shoot with a revolver. After that there was no coming back.
  `,
  strength: 20,
  intelligence: 40,
  stamina: 60,
  agility: 80,
  speed: 80,

  healthpoints: 500,
  mana: 0,

  resistance: 'Air' as TElement,
  weakness: 'Fire' as TElement,
  skills: [
    {
      name: 'Dynamite',
      damage: 70,
      element: 'Fire',
      description: 'Throws a dynamite.'
    },
    {
      name: 'Shooting spree',
      damage: 120,
      element: 'Fire',
      description: 'Shoots a full 6-rounder at multiple targets, dealing 20 damage to each target.'
    },
    {
      name: 'Holster shot',
      damage: 25,
      element: 'Physical',
      description: 'Shoots a quick shot, drawing her gun from a holster and putting it back.'
    }
  ]
}

const GIDEON = {
  name: 'Gideon',
  imgUrl: 'http://localhost:8080/public/gideon.png',
  description: `
    Laptop that he carries with him amplifies and channels his already enormous powers. Even though he might look soft and calm, there is raging power swirling inside him. One should not get in his way.
 `,
  backStory: `
    Gideon had always been bit of an oddball. He first noticed his psychic skills when he rescued a tiny kitten from getting squashed by a card. Little did he know of his future before awakening his powers, but at that point it seemed clear to him what he had to do. Couple years after the incident he joined the Hunters.
 `,
  strength: 1,
  intelligence: 99,
  stamina: 20,
  agility: 20,
  speed: 40,

  healthpoints: 300,
  mana: 20000,

  resistance: 'Air' as TElement,
  weakness: 'Fire' as TElement,
  skills: [
    {
      name: 'Telekinesis',
      damage: 0,
      element: 'Psychic',
      description: 'Gideon telepathically grasps of its target.'
    },
    {
      name: 'Psybeam',
      damage: 150,
      element: 'Psychic',
      description: 'Shoots a psychic beam.'
    },

  ]
}

export const seedDatabase = async () => {
  const heroRepository = getRepository(Hero)

  const heroes = heroRepository.create([PORCU, LISA, GIDEON])

  await heroRepository.save(heroes)
}

export type Lazy<T extends object> = Promise<T> | T
