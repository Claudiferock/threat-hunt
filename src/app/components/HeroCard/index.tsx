// It is your job to implement this. More info in README

import * as React from 'react'

interface IHeroCardProps {
  name: string
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name }) => {
  return (
    <div>{name}</div>
  )
}
