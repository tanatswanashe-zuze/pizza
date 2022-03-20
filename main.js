function Pizza(name, size, topping) {
    this.name = name;
    this.size = size;
    this.topping = topping;


};
let pizza1 = new Pizza(magarita, small, pineapple)
Pizza.prototype.sizes = {
    small: 10,
    medium: 15,
    large: 20
};

Pizza.prototype.names = {
    magarita: 20,
    Neapolitan: 15,
    luis: 13
};

Pizza.prototype.toppings = {
    pineapple: 2,
    cheese: 3,
    sauce: 1,
};

Pizza.prototype.price = function() {
    let Nameprice = this.names[this.name];
    let Sizeprice = this.sizes[this.size];
}

let pizzaprice = this.name + this.size;
console.log(pizzaprice)