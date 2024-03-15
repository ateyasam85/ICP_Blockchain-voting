import express, { Request, Response } from 'express';

interface Candidate {
  name: string;
  age: number;
  qualifications: string[];
}

const app = express();
app.use(express.json());

// Store candidates and their details in memory (replace with database in production)
const candidates: Candidate[] = [];

app.post('/admin/add_candidate', (req: Request, res: Response) => {
  const { name, age, qualifications } = req.body;

  // Validate the necessary details
  if (!name || !age || !qualifications) {
    return res.status(400).json({ error: 'Incomplete candidate details' });
  }

  // Add the candidate to the list
  const candidate: Candidate = {
    name,
    age,
    qualifications,
  };
  candidates.push(candidate);

  return res.status(200).json({ message: 'Candidate added successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});