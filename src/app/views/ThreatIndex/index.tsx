import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { ThreatCard } from '../../components/ThreatCard';

const THREATS_QUERY = gql`
	query {
		threat {
			name
			imgUrl
			description
			backStory
			strength
			intelligence
			stamina
			healthpoints
			mana
			agility
			speed
			resistance
			weakness
			skills {
				name
				damage
				element
			}
		}
	}
`;

interface IThreatIndexProps {}

interface IThreat {
  name: string;
  imgUrl: string;
  // extend this to match query above
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

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const ThreatIndex: React.FC<IThreatIndexProps> = () => {
	const {
		data: { threats },
		error,
		loading,
	} = useQuery<{ threats: IThreat[] }>(THREATS_QUERY);

	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	console.log(threats);

	return (
    <div>
      {threats.map(threat => (
        <ThreatCard key={threat.name} {...threat} />
      ))}
    </div>
	);
};
