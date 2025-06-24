import Head from 'next/head';

export default function AdminDashboard() {
  return (
    <>
      <Head><title>Admin Dashboard</title></Head>
      <main className="p-10">
        <h2 className="text-2xl font-bold">Admin Control Panel</h2>
        <p>Manage users, workshops, and website content.</p>
      </main>
    </>
  );
}
