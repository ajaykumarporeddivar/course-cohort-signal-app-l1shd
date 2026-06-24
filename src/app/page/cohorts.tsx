'use client';

import Layout from '../../layout';
import { Link } from 'next/navigation';
import { cohorts } from '@/lib/data';
import { CohortsTable } from '@/components/cohorts/table';

export default function CohortsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Cohorts</h1>
      <CohortsTable />
      <div className="flex justify-end">
        <Link href="/cohorts/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Cohort
        </Link>
      </div>
    </Layout>
  );
}