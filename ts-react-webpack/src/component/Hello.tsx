import React from 'react';
interface IProps{
    title:string,
    name?:string,
    age?:number,
    onMyClick?:any
}
interface IState{
    count:boolean 
}
export default class Hello extends React.Component<IProps,IState>{
    public constructor(props:any){
        super(props);
        this.state = {count:true};
        this.handleClick=this.handleClick.bind(this)
        this.selectClick = this.selectClick.bind(this)
    }
    handleClick(){
        this.setState(
            state=>({
                count:!state.count
            })
        );
    }
    selectClick(){
       this.props.onMyClick()
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>welcome{this.props.name}</p>
                <p>age:{this.props.age}</p>
                <button onClick={this.handleClick}>{this.state.count ? 'ON' : 'OFF'}</button>
                <button onClick={this.selectClick}>print</button>
            </div>   
        )
    }
}
