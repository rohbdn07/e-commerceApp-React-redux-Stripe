import React from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";

export default function FooterEnd(): JSX.Element {
   return (
      <>
         <div className="footer_end">
            <div className="fotend_wrapper">
               <div className="fotend_left">
                  <p className="text-muted">2021 RB-Cart</p>
               </div>
               <div className="fotend_middle text-muted">
                  <p>rohbdn@yahoo.com</p>
                  <p>+1234567890</p>
                  <p>somewhere in the world</p>
               </div>
               <div className="fotend_cards text-muted">
                  <FaCcVisa className="mx-1" />
                  <FaCcPaypal className="mx-2" />
                  <FaCcMastercard />
               </div>
            </div>
         </div>
      </>
   );
}
