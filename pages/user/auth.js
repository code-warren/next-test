import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useRouter } from "next/router"; // Correction de l'importation

function Auth() {
  const [username, setUsername] = useState('');
  const { setUser } = useContext(UserContext);
  const router = useRouter(); // Utilisation correcte de useRouter

  const onSubmit = (e) => {
    e.preventDefault();
    if (username) {
      setUser(username);
      console.log(router);
      router.push('/');
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return ( 
    <form className="form" onSubmit={onSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Entrer</button>
    </form>
  );
}

export default Auth;
