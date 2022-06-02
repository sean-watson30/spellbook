// =======================================
//              DEPENDENCIES
// =======================================
const router = require('express').Router();
const PriSpell = require('../models/priSpell.js');

// =======================================
//              MIDDLEWARE
// =======================================


// =======================================
//              ROUTES
// =======================================

// INDEX
router.get('/', (req, res) => {
    res.render('priSpells/priIndex.ejs')
})
router.get('/pri1', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex1.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri2', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex2.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri3', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex3.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri4', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex4.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri5', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex5.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri6', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex6.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/pri7', (req, res) => {
  PriSpell.find({}, (err, foundSpells) => {
    res.render('priSpells/priIndex7.ejs', {
      spells: foundSpells
    })
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('priSpells/priNew.ejs')
})

// DELETE
router.delete('/:id', (req, res) => {
  PriSpell.findByIdAndRemove(req.params.id, () => {
    res.redirect('/priSpells');
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  PriSpell.findByIdAndUpdate(req.params.id, req.body, (err, updatedSpell) => {
    res.redirect(`/priSpells/${updatedSpell._id}`);
  });
});

// CREATE
router.post('/', (req, res) => {
  PriSpell.create(req.body, (err, createdSpell) => {
    res.redirect('/priSpells');
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  PriSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('priSpells/priEdit.ejs', {
      spell: foundSpell
    });
  });
});

// SHOW
router.get('/:id', (req, res) => {
  // res.send('show')
  PriSpell.findById(req.params.id, (err, foundSpell) => {
    res.render('priSpells/priShow.ejs', {
      spell: foundSpell
    });
  });
});

module.exports = router;