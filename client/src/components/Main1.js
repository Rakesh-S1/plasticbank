import React, { Component } from 'react';
var image0 = require('../images/00.jpg')
var image1 = require('../images/1.jpg')
var image2 = require('../images/1.5.jpg')
var image3 = require('../images/2.jpg')
var image4 = require('../images/3.jpg')
var image5 = require('../images/4.jpg')
var image6 = require('../images/5.jpg')
var image7 = require('../images/6.jpg')

class Main1 extends Component{
    render(){
    return(
        <div className="qawsed11">
        <div className="homepage">
            <div className="homepage1">
                <h1>Join the fight against ocean plastic and poverty by going plastic positive!</h1></div>
            </div>
            <div className = "crypto_val_display">
            <h2>Plicoin Price Today in INR</h2>
            <div className = "crypto_val_display2">
            <h1>10.00</h1></div>
            </div>
            <div className="homepg_pictures">
                <div className="img_render q0"> <img src={image0} className="i0"/><div className="middle">
                    <div className="text">Plastic Disposals</div>
                </div>
                </div>
                <div className="img_render q1"> <img src={image1} className="i1"/>
                <div className="middle">
                    <div className="text">Plastic Waste Segregation</div>
                </div>
                </div>
                <div className="img_render q2"> <img src={image2} className="i2"/><div className="middle">
                    <div className="text">Plastic Collection</div>
                </div></div>
                <div className="img_render q3"> <img src={image3} className="i3"/><div className="middle">
                    <div className="text">Recycle Ready</div>
                </div></div>
                <div className="img_render q4"> <img src={image4} className="i4"/><div className="middle">
                    <div className="text">Recyclable Plastic</div>
                </div></div>
                <div className="img_render q5"> <img src={image5} className="i5"/><div className="middle">
                    <div className="text">Recycling Process</div>
                </div></div>
                <div className="img_render q6"> <img src={image6} className="i6"/><div className="middle">
                    <div className="text">Recycled Plastic Bottles</div>
                </div></div>
                <div className="img_render q7"> <img src={image7} className="i7"/><div className="middle">
                    <div className="text">ADIDAS Shoes Made Out <br/>of Recycled Ocean Plastic</div>
                </div></div>
                
            </div>
        </div>
    )
}
}
export default Main1;