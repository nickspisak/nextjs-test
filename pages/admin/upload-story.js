import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminUpload from '../../components/AdminUpload';

const UploadStory = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the admin is authenticated; if not, redirect to the login page
    const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (isAdminAuthenticated !== 'true') {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div>
      <h2>Upload a Full-Length Story</h2>
     <AdminUpload />
    </div>
  );
};

export default UploadStory;