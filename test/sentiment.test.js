const sinon = require('sinon');
const expect = require('chai').expect;
const proxyquire = require('proxyquire');

describe('Check validation of sentiment analysis api', () => {
    let requestPromise, getSentiment;
    //executes once before test cases are about to be executed
    before(() => {
        requestPromise = {
            get: sinon.stub()
        }
        // stub request-promise in while executing getSentiment
        getSentiment = proxyquire('../lib/sentiment.js', { 'request-promise': requestPromise });
    });

    context('Sending a negative text as input', () => {
        it('Check if sentiment is negative', (done) => {
            requestPromise.get.resolves({ "sentiment": "negative" })
            getSentiment('I am depressed', (err, response) => {
                expect(err).to.be.null;
                expect(response).to.be.equals({ "sentiment": "negative" });
                done();
            })
        });

    });

    context('Sending a netural text as input', () => {
        it('Check if sentiment is neutral', (done) => {
            requestPromise.get.resolves({ "sentiment": "neutral" })
            getSentiment('It is going to rain today', (err, response) => {
                expect(err).to.be.null;
                expect(response).to.be.equals({ "sentiment": "neutral" });
                done();
            })
        });
    });

    context('Sending a positive text as input', () => {
        it('Check if sentiment is positive', (done) => {
            requestPromise.get.resolves({ "sentiment": "positive" })
            getSentiment('I am depressed', (err, response) => {
                expect(err).to.be.null;
                expect(response).to.be.equals({ "sentiment": "postive" });
                done();
            })
        });

    });


    context('Sending number as input', () => {
        it('Check if error is thrown', (done) => {
            requestPromise.get.rejects('{"error": "invalid type"}')
            getSentiment('565767', (err, response) => {
                expect(err).to.be.not.null;
                expect(response).to.be.null;
                done();
            })
        });

    });

    // executes after all the test cases have been executed
    after(() => {
        // restore the function to get to its original state
        requestPromise.get.restore();
    });

});