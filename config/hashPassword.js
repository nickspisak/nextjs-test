import bcrypt from 'bcrypt';

// Replace 'your-admin-password' with your chosen strong password
const adminPassword = 'your-admin-password';

// Generate a salt and hash the password
bcrypt.hash(adminPassword, 10, (err, hash) => {
  if (err) {
    console.error('Password hashing failed:', err);
  } else {
    // Log the hashed password (you would store this in the database later)
    console.log('Hashed Password:', hash);
  }
});