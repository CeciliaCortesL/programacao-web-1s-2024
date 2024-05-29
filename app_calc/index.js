const express = require('express');
const path = require('path');
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'src/views')); 
app.set('view engine', 'ejs'); 

app.use('/', calculadoraRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
