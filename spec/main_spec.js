"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("1 input 12345 to code", function(){
        let inputStr = '12345';
        let result = main(inputStr);
        let expect_string = '|:::||::|:|::||::|::|:|:|::|:|:|';
        
        expect(expect_string).to.equal(result);
    });

    it("2 input |:::||::|:|::||::|::|:|:|::|:|:| to numbers", function(){

        let inputStr = '|:::||::|:|::||::|::|:|:|::|:|:|';
        let result = main(inputStr);
        let expect_string = '12345';

        expect(expect_string).to.equal(result);
    });

    it("3 input 12345-6789 to code", function(){
        let inputStr = '12345-6789';
        let result = main(inputStr);
        let expect_string = '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|';
        
        expect(expect_string).to.equal(result);
    });

    it("4 input |:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:| to numbers", function(){

        let inputStr = '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|';
        let result = main(inputStr);
        let expect_string = '12345-6789';

        expect(expect_string).to.equal(result);
    });
});