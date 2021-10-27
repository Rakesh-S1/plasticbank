import React,{Component} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import history from '../history';
class ConductTranscation extends Component {
    state={recipient:'', amount:0};
    updateRecipient = event=>{
        this.setState({ recipient: event.target.value })
    }
    updateAmount = event=>{
        this.setState({ amount: Number(event.target.value) })
    }
    ConductTranscation=()=>{
        const {recipient, amount} = this.state;
        fetch (`${document.location.origin}/api/transact`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({recipient,amount})
        }).then(response=>response.json())
            .then(json=>{
                alert(json.message || json.type);
                history.push('/Transaction-Pool');
                location.reload()
            });
    }
    render(){
        return (
            <div className='ConductTransaction'>
                <h1> Conduct a Transaction</h1>
                <div className='Conductrec'>
                    
                    <FormGroup>
                    
                        <FormControl 
                        input='text'
                        placeholder='recipient'
                        value={this.state.recipient}
                        onChange={this.updateRecipient}
                        />
                        
                    </FormGroup>
                    </div>
                    <div className='Conductamo'>

                    <FormGroup>
                    <FormControl 
                        input= 'number'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.updateAmount}
                        />
                    </FormGroup>
                    </div>
                    <div>
                        <Button className="block_btn12" onClick={this.ConductTranscation}>Submit</Button>
                    </div>
                </div>
        )
    }

};
export default ConductTranscation;