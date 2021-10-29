import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission, index) => (
          <MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ index }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
