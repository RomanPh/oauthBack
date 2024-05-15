const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/error', (req, res) => res.send('Unknown Error'))
router.get('/auth/github',passport.authenticate('github',{ scope: [ 'user:email' ] }));
router.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});
router.get('/auth/github/callback',passport.authenticate('github', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    res.cookie('session', req.user.id, { expires: new Date(Date.now() + 3600) });
    res.redirect('http://localhost:3000/landing');
  });

module.exports = router;