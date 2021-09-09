import React from "react";
import { TiStarOutline } from "react-icons/ti";
import {RiDirectionLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
import {IoMdShareAlt} from "react-icons/io";
 
//components
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

const RestaurantLayout = (props) => {
  return (
    <>
      <RestaurantNavbar />
      <div className="conatiner mx-auto px-4 lg:px-20 mt-4">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ]}
        />
        <RestaurantInfo
          name="Shah Ghouse Hotel & Restaurant"
          restaurantRating="3.5"
          deliveryRating="3.2"
          cusine="North Indian, Chinese, Mughlai, Biryani, Kebab, Seafood, Beverages"
          address="Charminar, Hyderabad"
        />

        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
              <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
              <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
              <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
              <IoMdShareAlt /> Share
          </InfoButtons>
        </div>

        <div className="my-10">
          <TabContainer>
          </TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
