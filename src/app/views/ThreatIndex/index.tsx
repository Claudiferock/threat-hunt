import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import { ThreatCard } from '../../components/ThreatCard';

const THREATS_QUERY = gql`
	query {
		threats {
			name
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

interface IThreatIndexProps {}

interface IThreat {
  name: string;
  imgUrl: string;
  // extend this to match query above
}

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const ThreatIndex: React.FC<IThreatIndexProps> = () => {
	const {
		data: { threats },
		error,
		loading,
	} = useQuery<{ threats: IThreat[] }>(THREATS_QUERY);

	if (error) {
		return handleError(`Upsis! ${error.message}`);
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
