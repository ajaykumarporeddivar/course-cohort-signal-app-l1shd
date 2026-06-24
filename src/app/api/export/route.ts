import { NextApiRequest, NextApiResponse } from 'next';
import { csvWriter } from 'csv-writer';
import { courses, lessons } from '@/lib/data';

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const writer = csvWriter({
    header: [
      { id: 'Student ID', title: 'Student ID' },
      { id: 'Student Name', title: 'Student Name' },
      { id: 'Course ID', title: 'Course ID' },
      { id: 'Course Name', title: 'Course Name' },
      { id: 'Progress', title: 'Progress' },
      { id: 'At Risk', title: 'At Risk' },
    ],
  });

  const records = courses.flatMap((course) =>
    course.students.map((student) => ({
      'Student ID': student.id,
      'Student Name': student.name,
      'Course ID': course.id,
      'Course Name': course.name,
      Progress: student.progress,
      'At Risk': student.atRisk,
    }))
  );

  writer.pipe(res).writeRecords(records);
}