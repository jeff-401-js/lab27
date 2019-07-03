# lab27
lab27

### Author: Student/Group Name
Jeff

### Links and Resources
* [submission PR](https://github.com/jeff-401-js/lab27/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/lab27)
* [AWS S3](http://lab2727.s3-website-us-west-2.amazonaws.com/)
* [Netlify](https://cranky-pike-15e435.netlify.com/)

#### Documentation
* [UML-Data-Flow](./assets/lab27.jpg)


## Modules
index.js - renders the app
app.js - aggrecator file to gather all components
* components
* * Counter
* * * Counter.js - contains the counter class which adds or subtracts 1 each time the corresponding button is pushed
* * Footer
* * * Footer.js - the footer html and text
* * Header
* * * Header.js - the header html and text

### Setup
    "eslint": "^5.6.0",
    "eslint-config-airbnb-base": "^13.2.0",
    "eslint-plugin-jest": "^22.7.1",
    "node-sass": "4.12.0",
    "react": "16.6.3",
    "react-dom": "16.6.3",
    "react-jsonschema-form": "1.0.6",
    "react-redux": "5.1.1",
    "react-router-dom": "4.3.1",
    "react-scripts": "2.1.1",
    "react-test-renderer": "^16.8.6",
    "redux": "4.0.1",
    "superagent": "latest"

#### `.env` requirements
none

#### Running the app
* `npm start`


#### Tests
* `npm test`
