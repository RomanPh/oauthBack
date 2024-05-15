const request = require('supertest');
const express = require('express');
const account = require('../routes/account.js');

const app = new express();
app.use('/', account);

describe('Account route', function () {

  test('responds to /account/:id should be success', async () => {
    const res = await request(app).get('/account/sdewd');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      accountId: "sdewd",
      firstName: 'FirstName',
      lastName: 'LastName',
      address: 'testaddress',
      paid: true,
      createdAt: new Date('2023-07-01').toDateString()
    });
  });
});