function Cat (name, gender) {
    this.name = name;
    this.gender = gender;
    this.stomach = [];
};

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse)
};

Cat.prototype.findFemaleCat = function () {
    console.log('find at neighborhood');
};

module.exports = Cat;