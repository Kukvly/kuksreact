import React, {Component} from 'react';

class R009_Es6 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        let jsString1 = 'js';
        let jsString2 = '입니다.\n다음 줄입니다.';
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        let Es6String1 = 'ES6';
        let Es6String2 = '입니다.';
        console.log(`${Es6String1} 문자열${Es6String2}!!____다음 줄입니다.`);

        let LongString = 'ES6에 추가된 String 함수들입니다.';
        console.log('startsWith: ' + LongString.startsWith('ES6에 추가'));
        console.log('endsWith: ' + LongString.endsWith('ES6에 추가'));
        console.log('includes: ' + LongString.includes('ES6에 추가'));
    }

    render(){
        return(
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Es6;