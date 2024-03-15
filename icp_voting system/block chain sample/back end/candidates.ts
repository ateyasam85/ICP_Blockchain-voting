// Define a Candidate interface
interface Candidate {
    name: string;
    party: string;
  }
  
  // Define a Dashboard class
  class Dashboard {
    private candidates: Candidate[];
    private selectedCandidate: Candidate | null;
  
    constructor() {
      this.candidates = [];
      this.selectedCandidate = null;
    }
  
    // Add a candidate to the dashboard
    addCandidate(candidate: Candidate) {
      this.candidates.push(candidate);
    }
  
    // Display the candidates tab
    showCandidatesTab() {
      console.log('--- Candidates ---');
      for (const candidate of this.candidates) {
        console.log(`Name: ${candidate.name}`);
        console.log(`Party: ${candidate.party}`);
        console.log('-----------------');
      }
    }
  
    // Select a candidate based on the position
    selectCandidate(position: number) {
      if (position >= 0 && position < this.candidates.length) {
        this.selectedCandidate = this.candidates[position];
        console.log(`Selected candidate: ${this.selectedCandidate.name}`);
      } else {
        console.log('Invalid position.');
      }
    }
  
    // Navigate to the voting tab
    navigateToVotingTab() {
      if (this.selectedCandidate) {
        console.log('Navigating to the voting tab...');
        // Add your logic here to navigate to the voting tab
      } else {
        console.log('No candidate selected. Please select a candidate first.');
      }
    }
  }
  
  // Usage example
  const dashboard = new Dashboard();
  

  // Displaying the candidates tab
  dashboard.showCandidatesTab();
  
  // Selecting a candidate
  dashboard.selectCandidate(2); // Selecting the candidate at position 2
  
  // Navigating to the voting tab
  dashboard.navigateToVotingTab();