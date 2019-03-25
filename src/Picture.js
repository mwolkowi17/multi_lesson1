import React from 'react';

export class Picture extends React.Component{
    render(){
        return(
            <div>{this.props.name}</div>
        )
    }
}