import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js'; 

const app = express();
connectDB();

app.use(express.json());

app.use('/api/users', userRoutes); 

app.get('/', (req, res) => {
  res.send('Welcome to the e-Learning Platform API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
