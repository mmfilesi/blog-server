const express = require('express');
const router = express.Router();

const adminResponses = require('../core/adminResponses');

const User = require('../models/schema-user');

router.get('/login', (req, res)=> {
  const email = 'bar';
  const pwd = 'foo';
  User.find({userEmail: email, userPwd: pwd}, (error, data)=> {
    if (error) {
      res.status(500).end();
    }
    if (!data.length) {
      res.status(404).json({ ko: 'user not found' });
    } else {
      adminResponses.sendSuccess(res, { ok: 'user valid' });
      // res.status(200).json({ ok: 'user valid' });
    }
  });
});

module.exports = router;