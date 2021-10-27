import React,{Component} from 'react';
import history from '../history';
class Nodes extends Component {
    state={node:[]};
    componentDidMount() {
        fetch(`${document.location.origin}/api/know-address`)
          .then(response => response.json())
          .then(json => this.setState({ node: json }));
      }
    
    render(){
      var i=0;
        return (
            <div className='TransactionPool'>
                 <div className=" block22">
                        <h1>Known-Nodes</h1>
                    </div>
                 <br/>
                 <br/>
                 <div className="heading">
                  <div  className="heading-31">
                      <span className="headerColor" opacity="1">No.</span>
                  </div>
                  <div className="heading-41">
                      <span className="headerColor" opacity="1">Nodes</span>
                  </div>
              </div>
            
        { 
          this.state.node.map(node => {
            i++;
            return (
              <div key={node} className="content">
                <div className="heading-31"><span className="headerColor1" opacity="1"><b>{i}</b></span>
                  </div>
                <div className="heading-41"> <span className="headerColor1" opacity="1">{node}</span></div>
              </div>
            );
            
          })
        }
            </div>
        )
    }

};
export default Nodes;