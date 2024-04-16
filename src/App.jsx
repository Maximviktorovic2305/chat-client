import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import ChatPage from "./components/Chat";
import Home from "./components/Home";

const socket = io.connect("http://localhost:7000");

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home socket={socket} />} />
            <Route path="/chat" element={<ChatPage socket={socket} />} />
         </Routes>
      </>
   );
}

export default App;