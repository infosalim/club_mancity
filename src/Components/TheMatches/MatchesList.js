import React, { Component } from 'react';

class MatchesList extends Component {

    state={
        matcheslist:[]
    }

    static getDerivedStateFromProps(props, state){
        return state={
            matcheslist: props.matches
        }
    }

    render() {
        return (
            <div>
                Matches List
            </div>
        );
    }
}

export default MatchesList;