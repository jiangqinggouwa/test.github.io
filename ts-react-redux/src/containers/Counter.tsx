import * as React from 'react';
import{ connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement,increment }from '../store/actions';
import { StoreState } from '../types';
export interface IProps{
    value:number,
    onIncrement:()=>void,
    onDecrement:()=>void  
}
class Counter extends React.PureComponent<IProps>{
    public componentWillMount(){
        console.log(this.props)
    }
    public render(){
        const { value,onIncrement,onDecrement } = this.props;
        return(
            <p>
                Clicked:{ value }times 
                <br/>
                <br/>
                <button onClick={ onIncrement } style={{ marginRight:20 }}>+</button>
                <button onClick={ onDecrement }>-</button>
            </p>
        )
    }
}
const mapStateToProps = (state:StoreState):{value:number}=>({
    value:state 
})
const mapDispatchToProps = (dispatch:Dispatch)=>({
    onDecrement:()=>dispatch(decrement()),
    onIncrement:()=>dispatch(increment())
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);