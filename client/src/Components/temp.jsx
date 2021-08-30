import React from 'react';
import { useLocation } from 'react-router-dom';

const Temp = () => {
    const location = useLocation();
    return (
        <div>
            Hello this a temp component {location.pathname}
        </div>
    )
}

export default Temp;