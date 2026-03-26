require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Database connected'))
.catch(err => console.log('Database connection error:', err));




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});