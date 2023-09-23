import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the useRouter hook

  const handleLogin = async () => {
    // Replace 'your-static-admin-password' with the desired static password
    const staticAdminPassword = 'your-static-admin-password';

    if (password === staticAdminPassword) {
      // Password is correct, navigate to the landing page
      const isAdminAuthenticated = true;
      sessionStorage.setItem('isAdminAuthenticated', isAdminAuthenticated ? 'true' : 'false');
      router.push('/admin');
    } else {
      // Password is incorrect, handle authentication failure
      console.error('Authentication failed');
      // You can add error handling logic here, e.g., display an error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

