// Import necessary modules and dependencies
import express, { Request, Response } from 'express';

// Create an instance of the Express application
const app = express();

// Configure the Express middleware
app.use(express.json());

// Define the candidates data
const candidatesData = {
  Senator: {
    names: ["Robert Thompson", "Lisa White", "Christopher Harris", "Maria Rodriguez"],
    details: ["Party: Democrat", "Party: Republican", "Party: Independent", "Party: Green"],
    voted: [false, false, false, false]
  }
};

// Define the route for handling votes
app.post('/vote', (req: Request, res: Response) => {
  const { position, index } = req.body;

  // Check if the position and index are valid
  if (candidatesData[position] && candidatesData[position].names[index]) {
    // Check if the candidate has already been voted for
    if (!candidatesData[position].voted[index]) {
      // Update the voted status for the candidate
      candidatesData[position].voted[index] = true;

      // Implement your voting logic here
      // ...

      res.status(200).json({ message: `You voted for ${candidatesData[position].names[index]}` });
    } else {
      res.status(400).json({ error: 'You have already voted for a candidate.' });
    }
  } else {
    res.status(400).json({ error: 'Invalid position or index.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});