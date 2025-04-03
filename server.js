import app from './src/app.js';
import './src/config/dotenvConfig.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});