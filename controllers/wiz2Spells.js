// =======================================
//              DEPENDENCIES
// =======================================
const router = require('express').Router();
const WizSpell = require('../models/wiz2Spell.js');

// =======================================
//              MIDDLEWARE
// =======================================


// =======================================
//              ROUTES
// =======================================

// INDEX
router.get('/', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wiz2Spells/wiz2Index.ejs', {
      spells: foundSpells
    })
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('wiz2Spells/wiz2New.ejs')
})

// DELETE
router.delete('/:id', (req, res) => {
  WizSpell.findByIdAndRemove(req.params.id, () => {
    res.redirect('/wiz2Spells');
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  WizSpell.findByIdAndUpdate(req.params.id, req.body, (err, updatedSpell) => {
    res.redirect(`/wiz2Spells/${updatedSpell._id}`);
  });
});

// CREATE
router.post('/', (req, res) => {
  WizSpell.create(req.body, (err, createdSpell) => {
    res.redirect('/wiz2Spells');
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  WizSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('wiz2Spells/wiz2Edit.ejs', {
      spell: foundSpell
    });
  });
});

// SHOW
router.get('/:id', (req, res) => {
  // res.send('show')
  WizSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('wiz2Spells/wiz2Show.ejs', {
      spell: foundSpell
    });
  });
});

module.exports = router;