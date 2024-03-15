// Define a Candidate interface
interface Candidate {
    name: string;
    votes: number;
  }
  
  // Define a Results class to handle the tally
  class Results {
    private candidates: Candidate[];
  
    constructor() {
      this.candidates = [];
    }
  
    // Add a candidate to the tally
    addCandidate(candidate: Candidate) {
      this.candidates.push(candidate);
    }
  
    // Get the total number of votes for all candidates
    getTotalVotes() {
      let totalVotes = 0;
      for (const candidate of this.candidates) {
        totalVotes += candidate.votes;
      }
      return totalVotes;
    }
  
    // Get the results of the tally
    getTallyResults() {
      if (this.getTotalVotes() === 0) {
        return 'Election has not yet started.';
      }
  
      let results = 'Tally Results:\n';
      for (const candidate of this.candidates) {
        const percentage = (candidate.votes / this.getTotalVotes()) * 100;
        results += `${candidate.name}: ${candidate.votes} votes (${percentage.toFixed(2)}%)\n`;
      }
      return results;
    }
  }
  
  // Usage example
  const results = new Results();
  
  // Adding candidates
  
  // Get the tally results
  const tallyResults = results.getTallyResults();
  console.log(tallyResults);