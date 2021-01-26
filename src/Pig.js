function Pig (name) {
    this.name= name;
    this.stomach = [];
};

Pig.prototype.eat = function (bran) {
    this.stomach.push(bran);
};

module.exports = Pig;