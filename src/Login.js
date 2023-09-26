import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'guest', password: 'guest123', role: 'guest' },
  ];
  
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      if (user.role === 'admin') {
        // Redirect ke halaman admin jika peran adalah admin
        navigate('/dashboard');
      } else if (user.role === 'guest') {
        // Redirect ke halaman tamu jika peran adalah tamu
        navigate('/create-ticket');
      }
    } else {
      // Tampilkan pesan kesalahan jika login gagal
      alert('Login gagal. Periksa kembali username dan password Anda.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded">
        <div className="flex flex-col items-center pb-10">
            <img className="w-19 h-19 mt-8 mb-2 rounded-full shadow-lg" src="" alt="D"/>
            <h7 className="mb-1 text-sm font-medium text-gray-300 mb-5 dark:text-white">Dashboard Kit</h7>
            <span className="text-xl text-black font-bold dark:text-gray-400">Log In to Dashboard Kit</span>
            <span className="text-sm font-medium text-gray-400 mt-1 dark:text-gray-400">Enter your email and password below</span>
        </div>
        <form onSubmit={handleLogin}>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="text"
                placeholder="Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </input>
            </div>
            <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </input>
            </div>
            <div className="mb-6">
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </div>
        </form>
        <div className="flex flex-col items-center pb-10">
        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Don't have an account? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign Up</a>.</p>
        </div>
    </div>
  );
};

export default Login;
