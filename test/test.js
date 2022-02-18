const server = require('../server.js')

const chai = require('chai')
const expect = require('chai').expect
const should = chai.should()

const chaiHttp = require('chai-http')

chai.use(chaiHttp)


describe(
  'Test search results',
  () => {
    it(
      'Should return results in response', 
      (done) => {
        let input = {
          userInput:  'Fred'
        }
        chai.request('http://localhost:5000')
        .post('/api')
        .send(input)
        .end(
          (err, res) => {
            res.should.have.status(200)
            res.body.should.have.property('results')
            done()
          }
        )
      }
    )
  }
)
