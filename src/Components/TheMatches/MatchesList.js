import React, { Component } from 'react';
import { easePolyOut } from "d3-ease";
import NodeGroup from 'react-move/NodeGroup';

class MatchesList extends Component {

    state={
        matcheslist:[]
    }

    static getDerivedStateFromProps(props, state){
        return state={
            matcheslist: props.matches
        }
    }

    showMatches = () =>(
        this.state.matcheslist ? 
            <NodeGroup
                data={this.state.matcheslist}
                keyAccessor={d=> d.id}
                start={()=>({
                    opacity:0,
                    x:-200
                })}

                enter={(d,i)=>({
                    opacity:[1],
                    x:[0],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}

                update = {(d,i)=>({
                    opacity: [1],
                    x: [0],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}

                leave = {(d,i)=>({
                    opacity: [0],
                    x: [-200],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}
            >

                {(nodes)=>(
                    <div>
                        { nodes.map(({key, data, state: {x, opacity}})=>(
                            <div 
                                key={key}
                                className="match_box_big"
                                style={{
                                    opacity,
                                    transform: `translate(${x}px)`
                                }}
                            >
jkhjkj
                            </div>
                        ))}
                    </div>
                )}

            </NodeGroup>
        : null
    )

    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        );
    }
}

export default MatchesList;