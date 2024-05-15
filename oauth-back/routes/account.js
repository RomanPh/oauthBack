const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/account/:id', function (req, res) {
    res.send({
      accountId: req.params.id,
      firstName: 'FirstName',
      lastName: 'LastName',
      address: 'testaddress',
      paid: true,
      createdAt: new Date('2023-07-01').toDateString()
    });
  });
  
router.put('/account/:id', function (req, res) {
res.send(req.body);
});

module.exports = router;