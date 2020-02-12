const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('dinosRus', 20, [])
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('terodactyl', 'carnivor', 20);
  })

  it('should have a name', function(){
    const actual = park.name;
    const expected = 'dinosRus';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    const actual = park.ticketprice;
    const expected = 20;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur1);
    const actual = park.numDinos();
    const expected = 1;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeDino(dinosaur1);
    const actual = park.numDinos();
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.mostVisited();
    const expected = dinosaur1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const expected = 70;
    assert.strictEqual(park.numOfVisitors(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const expected = 25550;
    assert.strictEqual(park.numOfVisitorsPerYear(), expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const expected = 511000
    assert.strictEqual(park.totalRevenue(), expected);
  });

});
