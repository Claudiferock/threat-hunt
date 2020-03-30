import { getRepository } from 'typeorm'
import { Hero } from './entities/hero'
import { Threat } from './entities/threat'
import { TElement } from './types/element'

const EYEORE = {
  name: 'Eyeore',
  imgUrl: 'http://localhost:8080/public/eyeore.jpg',
  description: `
    These little creature's only mission in life is to take control over your IoT devices.
  `,
  backStory: `
    These Eyeores are the result of intense unethical gene manipulation and experimentation by a secret organization we still don't know about. \n
    They have been found well hidden, attached to IoT devices. \n
    For some reason they are easy to miss, but absolutely noticeable once you learn to recognise them. \n
    .
  `,
  healthpoints: 40,
  mana: 200,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 10,
    intelligence: 20,
    stamina: 200,
    agility: 20,
    speed: 40,
  }],
  skills: [
    {
      name: 'Snoopy snoopy do',
      damage: 20,
      element: 'Psychic',
      description: 'Eyeore got access to your IoT device and now its sending your data to cibercriminals :('
    },
    {
      name: 'hijacked time DDoS',
      damage: 60,
      element: 'Physical',
      description: 'Oh no! now your IoT deviced got hijacked, to be part of a DDoS attack!'
    }
  ]
}
const SNEAKKO = {
  name: 'Sneakko',
  imgUrl: 'http://localhost:8080/public/sneakko.jpg',
  description: `
    This devil fella sneaks into your devices and lurks there till it finds sensitive information to take advantage off.
  `,
  backStory: `
    Nobody really knows where it comes from, but one thing is for sure, he did't come to this world for anything good. \n
    In like manner to Eyeore, Sneakko is very skilled for getting into your computer undetected. \n
    Once inside he will wait and wait, while collective bits of sensitive and personal data. \n
    .
  `,
  healthpoints: 200,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
  skills: [
    {
      name: 'Passwords saved and unsafe now',
      damage: 200,
      element: 'Plasma',
      description: 'Hurls a beam of plasma from his central core.'
    },
    {
      name: 'Buy a decryption key',
      damage: 25,
      element: 'Physical',
      description: 'Porcu spins right arm really fast as a decoy, then quickly punches with his left straight to the opponents face.'
    }
  ]
}
const TRICKKERO = {
  name: 'Trickkero',
  imgUrl: 'http://localhost:8080/public/trickkero.jpg',
  description: `
    A mix of anarchist and joker, trick or treat, is time to choose.
  `,
  backStory: `
    Story available in October. \n
    . \n
    . \n
    .
  `,
  healthpoints: 800,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
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
const TINY = {
  name: 'Tiny',
  imgUrl: 'http://localhost:8080/public/tiny.jpg',
  description: `
    Tiny is rather simple, but in it's simplicity, he can bring havoc.
  `,
  backStory: `
    The story is so small, that it doesn't really make up for a styory. \n
    . \n
    . \n
    .
  `,
  healthpoints: 800,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
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
const OVERLORDS = {
  name: 'Overlords',
  imgUrl: 'http://localhost:8080/public/overlords.jpg',
  description: `
    For some reason they got into rulling positions and they'll make sure to stay as long as they can.
  `,
  backStory: `
    It might be thanks to a revolution or just thanks to overal dissapointment on current polititians and political correctness, but they are now in power and it might not be the best for you. \n
    . \n
    . \n
    .
  `,
  healthpoints: 800,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
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
const DUDEGUY = {
  name: 'Dudeguy',
  imgUrl: 'http://localhost:8080/public/dudeguy.jpg',
  description: `
    Using his swag and manipulation skills, dudeguy gains your trust, to get valuable personal information from you and missuse it.
  `,
  backStory: `
    Too much swag for a real story. \n
    . \n
    . \n
    .
  `,
  healthpoints: 800,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
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

const PORCU = {
  name: 'Porcu',
  imgAvatarUrl: 'http://localhost:8080/public/porcuAvatar.png',
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
  healthpoints: 800,
  mana: 0,
  resistance: 'Fire' as TElement,
  weakness: 'Water' as TElement,
  attributes: [{
    strength: 80,
    intelligence: 60,
    stamina: 100,
    agility: 20,
    speed: 40,
  }],
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
  imgAvatarUrl: 'http://localhost:8080/public/lisaAvatar.png',
  imgUrl: 'http://localhost:8080/public/lisa.png',
  description: `
    With her beloved revolver called React and super-human precision, Lisa can shoot a target from a mile away. She also carries a stack of dynamites and a lasso.
 `,
  backStory: `
    Coming from a wealthy family of McAllisters, Lisa had a joyful childhood. Though as the day went by at the helping her family with upkeeping the farm and raking leaves she found herself quite bored. She said that to her father. Being a huntsman and the head of the family, Joe McAllister decided to teach his daughter to shoot with a revolver. After that there was no coming back.
  `,
  healthpoints: 500,
  mana: 0,
  resistance: 'Air' as TElement,
  weakness: 'Fire' as TElement,
  attributes: [{
    strength: 20,
    intelligence: 40,
    stamina: 60,
    agility: 80,
    speed: 80,
  }],
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
  imgAvatarUrl: 'http://localhost:8080/public/gideonAvatar.png',
  imgUrl: 'http://localhost:8080/public/gideon.png',
  description: `
    Laptop that he carries with him amplifies and channels his already enormous powers. Even though he might look soft and calm, there is raging power swirling inside him. One should not get in his way.
 `,
  backStory: `
    Gideon had always been bit of an oddball. He first noticed his psychic skills when he rescued a tiny kitten from getting squashed by a card. Little did he know of his future before awakening his powers, but at that point it seemed clear to him what he had to do. Couple years after the incident he joined the Hunters.
 `,
  healthpoints: 300,
  mana: 20000,
  resistance: 'Air' as TElement,
  weakness: 'Fire' as TElement,
  attributes: [{
    strength: 1,
    intelligence: 99,
    stamina: 20,
    agility: 20,
    speed: 40,
  }],
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

const seedHeroRepo = async () => {
  const heroRepository = getRepository(Hero)
  
  const heroes = heroRepository.create([PORCU, LISA, GIDEON])
  
  await heroRepository.save(heroes)
}

const seedThreatRepo = async () => {
  const threatRepository = getRepository(Threat)
  const threat = threatRepository.create([DUDEGUY, EYEORE, OVERLORDS, SNEAKKO, TINY, TRICKKERO])
  await threatRepository.save(threat)
}

export const seedDatabase = () => {
  seedHeroRepo();
  seedThreatRepo();
}

export type Lazy<T extends object> = Promise<T> | T
