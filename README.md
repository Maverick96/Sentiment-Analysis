# Sentiment-Analysis
Unit testing for sentiment analysis api using mocha and chai

This project uses to [**sinon**](https://www.npmjs.com/package/sinon) to mock the *get* method of the [**request-promise**](https://www.npmjs.com/package/request-promise) library. Node's require dependency for *request-promise* is overriden by using [**proxyquire**](https://www.npmjs.com/package/proxyquire#usage) for testing purpose.
