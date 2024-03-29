import React from "react";
import "./Discount.scss";

export default function Discount(): JSX.Element {
   return (
      <>
         <div className="discount">
            <div className="discount_wrapper">
               <p>Have coupon?</p>
               <div className="search_input">
                  <form className="d-flex">
                     <input
                        className="form-control me-1"
                        type="search"
                        placeholder="Enter coupon code..."
                        aria-label="Search"
                     />
                     <button className="btn btn-outline-primary" type="submit">
                        Apply
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}
