function Pig (name, leg) {
    this.name= name;
    this.stomach = [];
    this.leg = leg;
};

Pig.prototype.eat = function (bran) {
    this.stomach.push(bran);
};

Pig.prototype.run = function () {
    console.log('run');
}

module.exports = Pig;