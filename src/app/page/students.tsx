import Layout from "../../app/layout";
import { Student } from '@/lib/data';

interface StudentsProps {
  title: string;
  description: string;
}

const Students: React.FC<StudentsProps> = ({ children, title, description }) => {
  return (
    <Layout title={title} description={description}>
      <ul>
        {Student.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Students;