// src/index.ts
import express, { Request, Response } from 'express';

// 1. Initialize the Express application
const app = express();
const port = 3000;

// 2. Middleware setup (optional but good practice)
// This is used for parsing JSON bodies in POST requests
app.use(express.json());

// 3. Define a simple route handler
app.get('/', (req: Request, res: Response) => {
  // Send a simple text response
  res.send('Hello from the TypeScript Express Server!');
});

// 4. Define another route handler
app.get('/api/status', (req: Request, res: Response) => {
  // Send a JSON response with status information
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    message: 'Server is running smoothly.',
  });
});

// 5. Start the server
app.listen(port, () => {
  console.log(`\n🎉 Server is running at http://localhost:${port}`);
  console.log(`\nEndpoints:`);
  console.log(`- http://localhost:${port}/`);
  console.log(`- http://localhost:${port}/api/status`);
});