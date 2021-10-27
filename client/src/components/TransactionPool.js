import React, { Component } from 'react';
import Transaction from './Transaction';
import {Link } from 'react-router-dom';
import { Button, TabPane } from 'react-bootstrap';
import history from '../history';

const POLL_INTERVAL_MS=10000;
class TransactionPool extends Component{
    state = {TransactionPoolMap: {}};
    fetchTransactionPoolMap = ()=>{
        fetch (`${document.location.origin}/api/transaction-pool-map`)
        .then(response=>response.json())
        .then(json=>this.setState({TransactionPoolMap:json}));
    } 
    componentDidMount(){
        this.fetchTransactionPoolMap();
        this.fetchPoolMapInterval=setInterval(
            ()=>this.fetchTransactionPoolMap(),
            POLL_INTERVAL_MS
            );
    }
    componentWillUnmount(){
        clearInterval(this.fetchPoolMapInterval);
    }
    fetchMineTransactions=()=>{
        fetch(`${document.location.origin}/api/mine-transactions`)
        .then(response=>{
            if(response.status===200){
                alert('Success');
                history.push('/blocks');
                location.reload()
            }
            else{
                alert('mine-transactions failed')
            }
        })
    }
    render(){
        
        return(
            <div className="TransactionPool">
                <div className="block11">
                    <div className=" block22">
                        <h1>TransactionPool</h1>
                    </div>
                    <div className=" block23">
                        <div className="headbtn">
                            <Button className="haw1"  
                            onClick={this.fetchMineTransactions}
                            >Mine-Transacations</Button>
                        </div>
                    </div>
                </div>
                <div className="transactions">
                    <div className="heading">
                                    
                        <div width="15%" className="heading-3">
                            <span className="headerColor" opacity="1">Sender</span>
                        </div>
                        <div width="15%" className="heading-3">
                            <span className="headerColor" opacity="1">Recipient</span>
                        </div>
                        <div width="20%" className="heading-4">
                            <span className="headerColor" opacity="1">Amount</span>
                        </div>
                    </div>
                    {
                            Object.values(this.state.TransactionPoolMap).map(transaction=>{
                                const ip=transaction.input.address
                                const op=transaction.outputMap
                                var i,ip1,j
                                const option=[]
                                j=0
                                for (i in op){
                                    ip1=ip
                                    j=j+1 
                                    
                                    option.push(                        
                                        <div className="content" key={j}>
                                            <div width="15%" className="heading-3">
                                                <span className="headerColor1" opacity="1">{`${ip1.substring(0,20)}...`}</span>
                                            </div>
                                            <div width="15%" className="heading-3">
                                                <span className="headerColor1" opacity="1">{`${i.substring(0,20)}...`}</span>
                                            </div>
                                            <div width="20%" className="heading-4">
                                                <span className="headerColor1" opacity="1">{op[i]}</span>
                                            </div>
                                            
                                        </div>)}
                                        return(option)
                            
                        })
                    }
                    
                    
                        
                </div>    
            </div>  
        )
    }
}
export default TransactionPool;
