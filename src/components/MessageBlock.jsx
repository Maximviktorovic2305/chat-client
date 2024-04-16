import { useState } from "react";

const MessageBlock = ({ socket }) => {
   const [message, setMessage] = useState("");

   const isTyping = () =>
      socket.emit("typing", `${localStorage.getItem("user")} is typing...`);

   const handleSend = (e) => {
      e.preventDefault();
      if (message.trim() && localStorage.getItem("user")) {
         socket.emit("message", {
            text: message,
            name: localStorage.getItem("user"),
            id: `${socket.id}-${Math.random()}`,
            socketId: socket.id,
         });
      }

      setMessage("");
   };

   return (
      <div className="mx-auto pb-8 pt-4">
         <form onSubmit={handleSend} className="flex gap-4 items-center">
            <input
               onKeyDown={isTyping}
               onChange={(e) => setMessage(e.target.value)}
               value={message}
               type="text"
               className="rounded px-2 py-2 border-[1px] border-primary"
            />
            <button className="inline-block px-3 py-2 rounded bg-primary text-gray-800 hover:bg-green-400 duration-200">
               Отправить
            </button>
         </form>
      </div>
   );
};

export default MessageBlock;
