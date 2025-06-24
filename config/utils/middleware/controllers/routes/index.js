import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>NeuroBot | Code. Create. Conquer.</title>
      </Head>
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to NeuroBot</h1>
        <p className="mt-4 text-lg">Empowering students with Robotics and AI workshops.</p>
        <Link href="/login" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Get Started</Link>
      </main>
    </>
  )
}
