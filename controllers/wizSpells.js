// =======================================
//              DEPENDENCIES
// =======================================
const router = require('express').Router();
const WizSpell = require('../models/wizSpell.js');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// const $ = require('jquery')(window);

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
router.get('/wiz1', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex1.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz2', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex2.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz3', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex3.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz4', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex4.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz5', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex5.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz6', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex6.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz7', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex7.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz8', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex8.ejs', {
      spells: foundSpells
    })
  })
})
router.get('/wiz9', (req, res) => {
  WizSpell.find({}, (err, foundSpells) => {
    res.render('wizSpells/wizIndex9.ejs', {
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