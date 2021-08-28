import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delievery from './Delievery';
import Dining from './Dining';

const Master = () => {
    const {type} = useParams();
    return <div className="my-5">
       {type === "delivery" && <Delievery />}
       {type === "dining" && <Dining />}
    </div>;
}

export default Master;