import React from 'react';
const Transaction=({transaction})=>{
    
    const {input,outputMap }=transaction;
    const recipients=Object.keys(outputMap);

    return (
        <div className='Transactions'>
            <div><b>From:</b>{`${input.address.substring(0,20)}...`} | Balance:{input.amount} </div>
            {
                recipients.map(recipient=>(
                    
                    <div key={recipient}>
                        <b>To:</b>{`${recipient.substring(0,20)}...`} | Sent:{outputMap[recipient]}
                    </div>
                    )
                )
            }
        </div>
    )
}
export default Transaction;