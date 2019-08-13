import * as React from 'react';
import Hello from './component/Hello';
export default class App extends React.Component{
    public selectClick(){
        console.log('print')
    }
    render(){
        return(
            <Hello name='姜玲玲' age={18} title='标题' onMyClick={this.selectClick}/>
        )
    }
}