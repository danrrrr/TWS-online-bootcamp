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

    it("no input", function(){

        var result = main();
        var expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });
    it("0 bottle", function(){

        var result = main(0);
        var expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });
    it("1 bottle", function(){
        var result = main(1);
        var expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;

        expect(expect_string).to.equal(result);
    });
    it("3 bottles", function(){
        let result = main(3);
        var expect_string = `3 bottle of beer on the wall, 3 bottle of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottle of beer on the wall, 2 bottle of beer.
Take one down and pass it around, 1 bottles of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
         expect(expect_string).to.equal(result);
    });
        it("99 bottles", function(){
            let result = main(200);
            console.log(result);
        })
   
});