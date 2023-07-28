import { UserContext } from "../Contexts/UserContext";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyLayout({ children }) {
  const [user, setUser] = useState(null)
    return ( 
      <UserContext.Provider value={{user, setUser}}>
        <div className="container">
        <Navbar />
         {children}
       <div className="footer">ENSET &copy; 2023
       </div>
     </div>
     </UserContext.Provider>
     );
}

export default MyLayout;
