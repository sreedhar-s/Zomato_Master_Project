import React from "react";

//components
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";

const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNavbar />
      <div className="conatiner mx-auto px-4 lg:px-20">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ]}
        />
      </div>
    </>
  );
};

export default RestaurantLayout;
