import React from 'react';
import CartList from "../modules/shopping-cart/components/CartList";
import CartFooter from '../shared/components/CartFooter';

const CartPage = () => {

    return (
        <div>
            <div className="gridCss">
                <CartList />
            </div>

            <CartFooter />
        </div>
    )
};

export default CartPage;