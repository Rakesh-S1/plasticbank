import React, { Component } from 'react';
import laoding from '../images/profile.gif';

class App extends Component {
    state = { walletInfo: {} };

    componentDidMount(){
        fetch(`${document.location.origin}/api/wallet-info`)
        .then(response => response.json())
        .then(json => this.setState({ walletInfo: json }));
    }

    render() {
        const { walletId, address, balance } = this.state.walletInfo;

        return(
            <div className='walletinfo1'>
                
                <div className="userprofilewallet1">
                    <img src={laoding} className="userprofilewallet" /><br/>
                </div>
                <br />
                <div className='wallet-info'>
                <div className='wall1'><span><b>Address:</b> {walletId}</span></div>  
                <div className='wall2'><span><b>Address:</b> {address}</span></div>
                <div className='wall3'><span><b>Balance:</b> {balance}</span></div>
                </div>
                <br/>
            </div>
        );
    }
}

export default App;