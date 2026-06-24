export const Cohort = [
  {
    id: 1,
    name: "Cohort 1",
    students: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ],
  },
  {
    id: 2,
    name: "Cohort 2",
    students: [
      { id: 3, name: "Bob Smith" },
      { id: 4, name: "Alice Johnson" },
    ],
  },
];

export const Student = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
  { id: 4, name: "Alice Johnson" },
];

// src/app/page/cohorts.tsx
import Layout from "../../app/layout";
import { Cohort } from '@/lib/data';

interface CohortsProps {
  title: string;
  description: string;
}

const Cohorts: React.FC<CohortsProps> = ({ children, title, description }) => {
  return (
    <Layout title={title} description={description}>
      <ul>
        {Cohort.map((cohort) => (
          <li key={cohort.id}>{cohort.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Cohorts;

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
