import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="block border p-2 my-2 w-full" />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="block border p-2 my-2 w-full" />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Login</button>
    </main>
  )
}
