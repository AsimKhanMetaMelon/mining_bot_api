import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import rewardRoutes from './routes/reward.routes';
import refferalRoutes from './routes/referral.routes';
// import botRoute from './routes/bot.routes'
// import otpRoute from "./routes/sentotp.routes"
// import bot from './controllers/bot.controller';
// console.log("Telegram Bot is running...", bot);
import inviteRoutes from './routes/invite.routes';
import checkInRoutes from './routes/checkIn.routes';
import orderRoutes from './routes/buyProduct.routes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Sample Route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Express with TypeScript!' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/rewards', rewardRoutes);
app.use('/api/v1/refferal', refferalRoutes);
app.use('/api/v1/invitation', inviteRoutes);
app.use('/api/v1/checkin', checkInRoutes);
app.use('/api/v1/orders', orderRoutes);
// app.use('/api/v1/otp', otpRoute)

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
