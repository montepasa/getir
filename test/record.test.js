const supertest = require('supertest'),
app = require('../index'),
request = supertest(app),
assert = require('chai').assert

describe('/list', () => {
    it('list / success', function (done) {      
      request.post('/')
        .send({
          startDate: '2017-01-20',
          endDate: '2018-02-01',
          minCount: 1000,
          maxCount: 3000
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          assert.equal(res.body.code, 0)          
          done()
        })
    })
    it('list / failed', async () => {
      const result = await request.post('/')
        .send({
          startDate: '2017-01-20',
          endDate: '21-02-2020',
          minCount: 500,
        })
      assert.equal(result.status, 200)
    })
    it('only post method allow', async () => {
        const result = await request.get('/')
        assert.equal(result.status, 200)
      })
  })