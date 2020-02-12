const Park = function (name, ticketprice){
  this.name = name;
  this.ticketprice = ticketprice;
  this.dinosaurs = [];
}

Park.prototype.name = function () {
  return this.name;
};

Park.prototype.methodName = function () {
  return this.ticketprice;
};

Park.prototype.numDinos = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur1) {
  this.dinosaurs.pop(dinosaur1);
};

// Park.prototype.mostVisited = function () {
//   if (this.dinosaur.guestsAttractedPerDay)
// };

Park.prototype.numOfVisitors = function () {
  let total = 0;

  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay
  }
  return total;
};

Park.prototype.numOfVisitorsPerYear = function () {
  return this.numOfVisitors()*365;
};

Park.prototype.totalRevenue = function () {
  return this.numOfVisitorsPerYear()* this.ticketprice;
};
module.exports = Park;
