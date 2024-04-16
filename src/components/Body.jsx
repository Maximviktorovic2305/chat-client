import { useNavigate } from "react-router-dom";

const Body = ({ messages, status }) => {
   const navigate = useNavigate();

   const handleLeave = () => {
      localStorage.removeItem("user");
      navigate("/");
   };

   return (
      <div className=" h-full ">
         <header className=" border-b-[1px]  border-gray-400 p-5">
            <button
               onClick={handleLeave}
               className="bg-secondary px-3 py-2 rounded hover:bg-red-400 duration-200 text-gray-700 block mx-auto">
               Покинуть чат
            </button>
         </header>

         {
            <div className="w-full flex flex-col pt-5">
               {messages?.map((element) =>
                  element.name === localStorage.getItem("user") ? (
                     <div key={element.id} className="pl-[60%] w-[80%]">
                        <p>Вы</p>
                        <div className="">
                           <p className="bg-primary px-3 py-2 rounded-xl text-gray-700">
                              {element.text}
                           </p>
                        </div>
                     </div>
                  ) : (
                     <div
                        key={element.id}
                        className="flex flex-col pl-[10%] w-[30%]">
                        <p>{element.name}</p>
                        <div className="">
                           <p className="bg-gray-600 px-3 py-2 rounded-xl">
                              {element.text}
                           </p>
                        </div>
                     </div>
                  )
               )}
               <div className="fixed text-[13px] font-italic bottom-[100px] left-[43.5%] text-green">
                  <p>{status}</p>
               </div>
            </div>
         }
      </div>
   );
};

export default Body;
