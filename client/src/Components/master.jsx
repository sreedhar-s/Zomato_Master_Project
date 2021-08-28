import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delievery from './Delievery';
import Dining from './Dining';
import NightLife from './NightLife';
import Nutrition from './Nutrition';

const Master = () => {
    const {type} = useParams();
    return <div className="my-5">
       {type === "delivery" && <Delievery />}
       {type === "dining" && <Dining />}
       {type === "night" && <NightLife />}
       {type === "nutri" && <Nutrition />}
    </div>;
}

export default Master;