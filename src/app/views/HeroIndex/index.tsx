import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard } from '../../components/HeroCard';
import { ThreatIndex } from '../ThreatIndex/index';

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgAvatarUrl
			imgUrl
			description
			backStory
			healthpoints
			mana
			resistance
			weakness
			attributes {
				strength
				intelligence
				stamina
				agility
				speed
			}
			skills {
				name
				damage
				element
			}
		}
	}
`;

interface IHeroIndexProps {}

interface IHero {
  name: string;
  imgUrl: string;
  imgAvatarUrl: string;
  description: string;
  backStory: string;
  resistance: string;
  weakness: string;
}

const HeroCardContainer = styled.div`
	display: flex;
	padding: 0 2%;
	align-self: center;
	max-width: 1150px;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
	}
`;

const ThreatCardContainer = styled.div`
	display: flex;
	padding: 0 2%;
	align-self: center;
	max-width: 1150px;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
	}
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div><h3>Error! {message}</h3></div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const {
		data: { heroes },
		error,
		loading,
	} = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	console.log(heroes);

	return (
		<main>
			<TopBar />
			<Hero />
			<Section
				heading={'Hunter Index'}
				paragraph={`
        		  Professor Hoax gave us this Hunter Index -tool 
        		  so we can see how our heroes manage against evildoers. 
        		  Unfortunately he forgot to implement their HeroCards. 
        		  It's your job to finish his work before we can continue
        		  on our journey together!
        		`}
			/>

			<HeroCardContainer>
				{heroes.map(hero => (
					<HeroCard key={hero.name} {...hero} />
				))}
			</HeroCardContainer>

			<Section
				heading={'Defeat the threats'}
				paragraph={`
        		  Professor Hoax and our heroes need your help. 
        		  To defeat the Cybersecurity threats lurking around us,
        		  let's do this together!
        		`}
			/>


			<ThreatCardContainer>
				<ThreatIndex/>
			</ThreatCardContainer>

			<Footer />
		</main>
	);
};
