const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;
const viewRouter = require('./routes/view-routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', viewRouter);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))