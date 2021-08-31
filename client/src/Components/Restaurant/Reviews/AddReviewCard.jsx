import React,{useState} from "react";

//coponents
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
  
  let [isOpen, setIsOpen] = useState(false) ;

  const openModal = () => {
    setIsOpen(true)
  };  
    
  return (
    <>
    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl font-medium">Rate Your Experience</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <button onClick={openModal} className="text-zomato-400">wite a review</button>
    </>
  );
};

export default AddReviewCard;
