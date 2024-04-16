import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
   const navigate = useNavigate();
   const [user, setUser] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("user", user);

      socket.emit("newUser", { user, socketId: socket.id });
      navigate("/chat");
   };

   return (
      <div className="h-[100vh]">
         <div className="w-[40%] mx-auto pt-[10%] text-center">
            <h2 className="mb-7 font-semibold text-[24px] text-white">
               Присоединиться
            </h2>

            <form onSubmit={handleSubmit}>
               <div className="mb-5">
                  <label htmlFor="user"></label>
                  <input
                     onChange={(e) => setUser(e.target.value)}
                     value={user}
                     type="text"
                     id="user"
                     className="peer h-full w-full rounded-[7px] border border-accent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-aqua placeholder-shown:border-t-aqua focus:border-2 focus:border-aqua focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  />
               </div>

               <button type="submit" className="inline-block px-3 py-2 bg-secondary rounded-lg hover:bg-accent hover:text-black duration-200">
                  Войти
               </button>
            </form>
         </div>
      </div>
   );
};

export default Home;
