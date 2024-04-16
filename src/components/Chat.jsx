import { useEffect, useState } from "react";
import Body from "./Body";
import Collapse from "./Collapse";
import MessageBlock from "./MessageBlock";
import Sidebar from "./Sidebar";

const ChatPage = ({ socket }) => {
   const [messages, setMessages] = useState([]);
   const [status, setStatus] = useState("");

   useEffect(() => {
      socket.on("response", (data) => {
         setMessages([...messages, data]);
      });
   }, [socket, messages]);

   useEffect(() => {
      socket.on("responseTyping", (data) => {
         setStatus(data);

         setTimeout(() => {
            setStatus("");
         }, 1000);
      });
   }, [socket]);

   return (
      <div className="flex">
         <Sidebar socket={socket} />
         <main className="flex flex-col w-[80%] pl-8">
            <Body messages={messages} status={status} />
            <MessageBlock socket={socket} />
            <Collapse />
         </main>
      </div>
   );
};

export default ChatPage;
