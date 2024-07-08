import express from 'express';
import usersRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

//middleware
app.use(express.json());
app.use('/api',usersRoutes);
app.use('/api',indexRoutes);



app.listen(3000
)
console.log('Server running on port 3000',PORT);