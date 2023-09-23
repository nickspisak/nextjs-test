import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    console.log('isAdminAuthenticated:', isAdminAuthenticated);
  
    if (isAdminAuthenticated !== 'true') {
      console.log('Redirecting to login page...');
      router.push('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    // Clear the admin authentication flag
    sessionStorage.removeItem('isAdminAuthenticated');
    // Redirect to the login page
    router.push('/admin/login');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <button onClick={handleLogout}>Logout</button>
      <Link href='/admin/upload-story'>Add a New Story</Link>
      {/* Add links to various admin actions here */}
    </div>
  );
};

export default AdminDashboard;