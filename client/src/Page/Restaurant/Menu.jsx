import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"

//component
import MenuCollections from '../../Components/Restaurant/MenuCollection';

import { getImage } from '../../Redux/Reducer/Image/Image.action';

const Menu = () => {
  const [menuImages, setMenuImages] = useState({ images: [] });
  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurants
  );
  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        console.log(data);
        setMenuImages(images);
      });
    }
  }, [reduxState]);
    return (
        <>
            <div className="flex flex-wrap gap-3">
            <MenuCollections 
                menuTitle="Menu"
                pages={menuImages.length}
                image={menuImages} 
            />
            </div>
        </>
    )
}

export default Menu;
