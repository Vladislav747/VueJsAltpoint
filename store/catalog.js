export default {

  state: {
    products: [
      {
        "id": "1232131241",
        "name": "Клубника",
        "srcImage": "https://images.unsplash.com/photo-1597354185766-0af84d802cbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        "tags": ["Фрукты", "Свежое"],
        "price": 1232131241
      },
      {
        "id": "123141231324",
        "name": "Мороженное",
        "srcImage": "https://www.raskraski.ru/p/240x168/583958_1.jpg?1599808330",
        "tags": ["Холодное", "Вкусное"],
        "price": 3241234123
      },
      {
        "id": "123124123sdf",
        "name": "Машина",
        "srcImage": "http://www.fonstola.ru/download.php?file=201201/1680x1050/fonstola.ru-72240.jpg",
        "tags": ["Ferrari", "Крутое"],
        "price": 12314123
      },
    ],

  },

  mutations: {
    addProduct(state, item){
      state.products.push(item);
    },
    deleteProduct(state, itemId){
      state.products = state.products.filter(item => item.id !== itemId);
    }
  },

  getters: {
    getProducts(state) {
      return state.products;
    },
  }
};
