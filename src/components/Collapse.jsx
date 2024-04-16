import React from "react";

const Collapse = () => {
   return (
      <div className="pb-5 flex items-center justify-between">
         <div className="text-sm breadcrumbs">
            <ul>
               <li className="text-primary">
                  <a>Frontend:</a>
               </li>
               <li>
                  <a>React 18</a>
               </li>
               <li>Socket.io</li>
               <li>Tailwindscc</li>
            </ul>
         </div>

         <div className="text-sm breadcrumbs">
            <ul>
               <li className="text-primary">
                  <a>Backend:</a>
               </li>
               <li>
                  <a>Node</a>
               </li>
               <li>Express</li>
               <li>Socket.io</li>
            </ul>
         </div>
      </div>
   );
};

export default Collapse;
