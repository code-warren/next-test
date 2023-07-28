import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Dashboard() {
    const { user } = useContext(UserContext);

    return ( 
        <>
        {user ? <h1>dashboard</h1> : <h1>Vous devez d'abord vous authentifier</h1>}
        </>
    );
}

export default Dashboard;
