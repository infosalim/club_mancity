import React from 'react';
import Featured from './Featured/Index';
import Matches from './Matches/Index';
import MeetPlayers from './MeetPlayers/Index';
import Promotion from './Promotion/Index';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    );
};

export default Home;