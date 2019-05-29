import React from 'react';
import Featured from './Featured/Index';
import Matches from './Matches/Index';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
        </div>
    );
};

export default Home;