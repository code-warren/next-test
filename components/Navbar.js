import Link from "next/link"
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
function Navbar() {
    const {user, setUser} = useContext(UserContext);
    const router = useRouter
    const quitter = (e) => {
        setUser(null)
    }
    const handleClick = (e) =>{
        console.log(e);
    }
    return ( 
        <nav>
          <Link href="/" className={router.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link href="/blog" className={router.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          {user && <Link href="/dashboard" className={router.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>}
          {!user && <Link href="/user/auth" className={router.pathname === '/' ? 'active' : ''}>Connectez-vous</Link>}

          {user && <button onClick={quitter}>bonjour <strong>{user}</strong> . déconnectez-vous</button>}
        </nav>
      );
      
}

export default Navbar;