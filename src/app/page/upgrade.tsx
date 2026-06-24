'use client';

import Layout from '../../layout';

export default function UpgradePage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Upgrade</h1>
      <p>Unlock full roadmap features</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upgrade Now
      </button>
    </Layout>
  );
}