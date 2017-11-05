process.env.NODE_ENV = 'test';

//Mocha specific declarations
let mocha = require("mocha");

//chai specific declarations
let chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let chaiHttp = require('chai-http');
let sinon = require('sinon');
chai.use(chaiHttp);
 //let server = sinon.fakeServer.create();
let server = require('../server');
//project specific modules
let Book = require('../app/models/book');

describe('/GET book', () => {
	  it('it should GET all the books', (done) => {
			chai.request(server)
		    .get('/book')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });











/*
* function getBook(req, res) {
	Book.findById(req.params.id, (err, book) => {
		if(err) res.send(err);
		//If no errors, send it back to the client
		res.json(book);
	});
}
* */
/* return below book JSON
"title": "MyBook",
"author": "Harika",
"year": "1999",
"pages": 190,
"createdAt": "2017-11-04",*/

describe('books', function() {
    it('should increment stored value by one', function() {
        var bookMock = sinon.mock(Book);
        bookMock.expects('getBook').withArgs('data').returns(JSON.stringify(
            {
                "title": "MyBook",
                "author": "Harika",
                "year": "1999",
                "pages": "190",
                "createdAt": "2017-11-04"
            }
        ));

    // storeMock.restore();
      //  storeMock.verify();
    });
});

