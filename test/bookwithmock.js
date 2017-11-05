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

//project specific modules
let Book = require('../app/models/book');
let server = sinon.fakeServer.create();
//Integration test related modules
//let server = require('../server');

describe('/book', () => {


   server = null;

    beforeEach(function () {
     server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });

    it('ajax working', () => {
        // Set up the fake response
        server.respondWith('GET', '/book',
            [200, {'Content-Type': 'application/json'},
                JSON.stringify(
                    {
                        "id": 1,
                        "first_name": "firstname",
                        "last_name": "lasname",
                        "account": "0016",
                        "cpf": "55555555555",
                        "rg": "5555555555",
                        "birthdate": "0000-00-00",
                        "street": "Av. street",
                        "number": 881,
                        "complement": "",
                        "district": "xxxxxx",
                        "city": "city",
                        "country": "Brasil",
                        "state": "RS",
                        "zip_code": "00000000",
                        "health_plan": "",
                        "account_phone": "5599999999",
                        "contact_phone": "",
                        "key_box": "",
                        "general_info": ""
                    }
                )
            ]
        );

        server.respondWith('POST', '/book', JSON.stringify({'response': 'ok'}));

       server.respond();

    })

});


describe('Books', () => {

    describe('/GET book', () => {
        server = null;

        beforeEach(function () {
            server = sinon.fakeServer.create();
        });

        afterEach(function () {
            server.restore();
        });
        it('it should GET all the books', (done) => {
            chai.request(server)
                .get('/book')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });


});
