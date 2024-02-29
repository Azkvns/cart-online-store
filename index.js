const shoppingCart = {
  items: [],
  total: 0,
  addItem(name, price, quantity) {
    this.items.push({name, price, quantity});
    this.total += price * quantity;
  },
  removeItem(itemName) {
    const itemIndex = this.items.findIndex(({name}) => name === itemName);
    const {price, quantity} = this.items[itemIndex];
    this.total -= price * quantity;
    this.items.splice(itemIndex, 1);
  },
  updateQuantity(itemName, newQuantity) {
    const itemIndex = this.items.findIndex(({name}) => name === itemName);
    const {price, quantity} = this.items[itemIndex];
    this.total += (newQuantity - quantity) * price;
    this.items[itemIndex].quantity = newQuantity;
  },
  calculateTotal() {
    this.total = this.items.reduce((acc, {price, quantity}) => {
      return acc + (price * quantity);
    }, 0)
  },
  clearCart() {
    this.items = [];
    this.total = 0;
  },
  applyDiscount(discountName) {
    if (discountName === 'kek') {
      this.total *= 0.9;
    }
  }
}