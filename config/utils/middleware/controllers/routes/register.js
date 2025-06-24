import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleRegister = async () => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} className="block w-full border p-2 my-2" />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} className="block w-full border p-2 my-2" />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} className="block w-full border p-2 my-2" />
      <select onChange={e => setFormData({ ...formData, role: e.target.value })} className="block w-full border p-2 my-2">
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </main>
  );
}
