// Import necessary modules and dependencies
import express, { Request, Response } from 'express';

// Create an instance of the Express application
const app = express();

// Configure the Express middleware
app.use(express.urlencoded({ extended: false }));