import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from './firebase'; // Assuming you have your Firebase configuration

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <p>User is signed in: {user.uid}</p> : <p>User is signed out</p>}
    </div>
  );
}
export default MyComponent;