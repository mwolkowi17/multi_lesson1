import React from 'react';
import {Picture} from './Picture';

export class Main extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.name}</div>
                <Picture name='Picute inside Main' />
            </div>
        )
    }
}