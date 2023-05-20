
import React from "react";

class CartItem extends React.Component{
    render(){
        return(
           <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div>
                        Phone
                    </div>
                    <div style={{color:'red'}}>
                        Rs 999
                    </div>
                    <div>
                      Qty:1
                    </div>
                </div>
           </div>
        )
    }
}

const styles = {
    image: {
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'grey'
    }
}

export default CartItem;