import React from 'react';

//components
import CheckoutNavbar from '../Components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
            <CheckoutNavbar />
            <div className="container mx-auto px-4 md:px-20">
                {props.children}
            </div>
        </>
    )
}

export default CheckoutLayout;
