import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const cohorts = [
    {
      id: 1,
      name: 'Cohort 1',
      students: [
        {
          id: 1,
          name: 'Student 1',
          progress: 0.5,
          lastActive: '2024-09-01',
        },
        {
          id: 2,
          name: 'Student 2',
          progress: 0.8,
          lastActive: '2024-09-05',
        },
      ],
    },
    {
      id: 2,
      name: 'Cohort 2',
      students: [
        {
          id: 3,
          name: 'Student 3',
          progress: 0.2,
          lastActive: '2024-09-03',
        },
        {
          id: 4,
          name: 'Student 4',
          progress: 0.6,
          lastActive: '2024-09-04',
        },
      ],
    },
  ];

  response.status(200).json(cohorts);
}