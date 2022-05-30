// =======================================
//              DEPENDENCIES
// =======================================
const router = require('express').Router();
const WizSpell = require('../models/wizSpell.js');

// =======================================
//              MIDDLEWARE
// =======================================


// =======================================
//              ROUTES
// =======================================

// INDEX
router.get('/', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex.ejs', {
      spells: foundSpells
    })
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('wizSpells/wizNew.ejs')
})

// DELETE
router.delete('/:id', (req, res) => {
  WizSpell.findByIdAndRemove(req.params.id, () => {
    res.redirect('/wizSpells');
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  WizSpell.findByIdAndUpdate(req.params.id, req.body, (err, updatedSpell) => {
    res.redirect(`/wizSpells/${updatedSpell._id}`);
  });
});

// CREATE
router.post('/', (req, res) => {
  WizSpell.create(req.body, (err, createdSpell) => {
    res.redirect('/wizSpells');
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  WizSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('wizSpells/wizEdit.ejs', {
      spell: foundSpell
    });
  });
});

// SHOW
router.get('/:id', (req, res) => {
  // res.send('show')
  WizSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('wizSpells/wizShow.ejs', {
      spell: foundSpell
    });
  });
});

module.exports = router;