import express from 'express';
import passport from './config/passportConfig.js';
import authRoutes from './routes/authRoutes.js';
import pingRoutes from './routes/pingRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import db from './models/db.js';
import './config/dotenvConfig.js';
import setupSwagger from './config/swaggerConfig.js';

const app = express();
app.use(express.json());
app.use(passport.initialize());

setupSwagger(app);

app.use(authRoutes);
app.use(pingRoutes);
app.use(dashboardRoutes);

db.sequelize.sync().then(() => {
    console.log('Database synchronized successfully');
});

export default app;