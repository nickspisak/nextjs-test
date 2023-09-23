import bcrypt from 'bcrypt';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Replace 'your-static-admin-password' with the desired static password
    const staticAdminPassword = 'your-static-admin-password';
    const { password } = req.body;

    try {
      if (password === staticAdminPassword) {
        // Password is correct, send a success response
        res.status(200).json({ message: 'Authentication successful' });
      } else {
        // Password is incorrect, send an error response
        res.status(401).json({ message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle any errors that occur during authentication
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle unsupported HTTP methods (e.g., GET)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};