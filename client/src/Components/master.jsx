import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delievery from './Delievery';

const Master = () => {
    const {type} = useParams();
    return <div className="my-5">
       {type === "delivery" && <Delievery />}
    </div>;
}

export default Master;