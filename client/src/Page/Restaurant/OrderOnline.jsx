import React,{useState,useEffect} from "react";
import {useSelector , useDispatch} from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";

//redux actions
import { getFoodList } from "../../Redux/Reducer/Food/food.action";

const OrderOnline = () => {
  const [menu,setMenu] = useState([]);
  const reduxState = useSelector((globalStore) => globalStore?.restaurant?.selectedRestaurant?.restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) =>
        setMenu(data.payload.menus.menus)
      );
  }, [reduxState]);
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full h-screen md:3/4 flex flex-col gap-3">
          <div className="px-3">
            <h2 className="text-xl font-semibold">Order online</h2>
            <h4 className="flex gap-3 items-center font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            <FoodList
              title="Recommended"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/d23/b61bd95f61310d91b811cbc407f8fd23.jpg?fit=around|130:130&crop=130:130;*,*",
                  title: "Kheema Masala",
                  price: "₹1000",
                  description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                  rating: 4,
                },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
