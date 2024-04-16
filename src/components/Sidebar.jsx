import { useEffect, useState } from "react";

const Sidebar = ({ socket }) => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      socket.on("responseNewUser", (data) => {
         setUsers(data);
      });
   }, [users, socket]);

   const filteredList = users.filter(
      (value, index, self) =>
         index ===
         self.findIndex(
            (t) => t.user === value.user && t.socketId === value.socketId
         )
   );

   return (
      <div class=" text-gray-400 relative flex h-[100vh] w-[15%] flex-col rounded-r-xl bg-neutral bg-clip-border p-4shadow shadow-gray-400">
         <div class="p-4 mb-2">
            <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-300">
               Пользователи
            </h5>
         </div>
         <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal">
            {filteredList?.map((element) => (
               <div
                  key={element.socketId}
                  role="button"
                  class="flex items-center w-[70%] hover:text-white p-3 hover:bg-aqua leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  {element.user}
               </div>
            ))}
         </nav>
      </div>
   );
};

export default Sidebar;
