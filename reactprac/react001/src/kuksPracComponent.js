import React, { Component } from 'react';

class kuksPracComponent extends Component{
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    
    render(){
        console.log("3. render Call");
        return(
            <h2>[THIS IS PRACTICE COMPONENT]</h2>
        )
    }
}

export default kuksPracComponent;