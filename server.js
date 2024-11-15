const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/cars', carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
