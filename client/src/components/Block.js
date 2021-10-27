import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import Transaction from './Transaction';
class Block extends Component{
    state={displayTransaction:false};
    //temp
    toggleTransaction = () => {
        this.setState({ displayTransaction: !this.state.displayTransaction });
      }
    //temp
    get displayTransaction(){
        const{data}= this.props.block;
        const stringifiedData=JSON.stringify(data);
        const dataDisplay=stringifiedData.length > 35 ?
            `${stringifiedData.substring(0,35)}...` :
            stringifiedData;
        if(this.state.displayTransaction){
            return(
                <div>
                    {
                        data.map(transaction=>(
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction}/>
                            </div>
                        ))
                    }
                    <br/>
                    <Button onClick={this.toggleTransaction} className="block_btn12">
                        Show Less
                    </Button>
                </div>
            )
        }
        return (
            <div>
                <div><p className='parablock'>TData:</p>{dataDisplay}</div>
                <Button onClick={this.toggleTransaction} className="block_btn12">
                    Show More
                </Button>
            </div>
        );

    }
    render(){
        const{timestamp,hash}= this.props.block;
        const hashDisplay=`${hash.substring(0,15)}...`;  
          
        return(
            <div className='blocks'>
                <div><p className='parablock'>Hash:</p>{hashDisplay}</div>
                <div><p className='parablock'>TimeStamp:</p>{new Date(timestamp).toLocaleString()}</div>
                {this.displayTransaction}
            </div>
        )
    }
}
export default Block;