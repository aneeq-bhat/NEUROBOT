import Head from 'next/head';

export default function Learn() {
  return (
    <>
      <Head><title>Learn | NeuroBot</title></Head>
      <main className="p-10">
        <h2 className="text-2xl font-bold">Learning Hub</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Python for AI</li>
          <li>Robotics with Arduino</li>
          <li>Machine Learning Basics</li>
        </ul>
      </main>
    </>
  );
}
