// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const wizSpellsController = require('./controllers/wizSpells.js');
const wiz2SpellsController = require('./controllers/wiz2Spells.js');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// const $ = require('jquery')(window);
const PORT = process.env.PORT || 3000;

// =======================================
//              DATABASE CONFIG
// =======================================
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// =======================================
//              MIDDLEWARE
// =======================================
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/wizSpells', wizSpellsController);
app.use('/wiz2Spells', wiz2SpellsController);

// =======================================
//              ROUTES
// =======================================
app.get('/', (req, res) => {
  // res.send('working');
  res.render('index.ejs');
})

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})