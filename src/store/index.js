import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortedBy: '',
    message: 'Hi, welcome to the product grid demo. Change someting and hit Enter!',
    products: [
      {
        id: 1,
        title: 'apple', 
        description: 'Red apples', 
        price: 5,
        quantity: 6, 
        image: require('../assets/apple.jpeg')
      },
      {
        id: 2,
        title: 'banana', 
        description: 'Fresh bananas', 
        price: 4,
        quantity: 10, 
        image: require('../assets/banana.jpeg')
      },
      {
        id: 3,
        title: 'peach', 
        description: 'Great peaches', 
        price: 3,
        quantity: 2, 
        image: require('../assets/peach.jpeg')
      },
      {
        id: 4,
        title: 'Lemon', 
        description: 'Yellow lemon', 
        price: 1,
        quantity: 2, 
        image: require('../assets/lemon.jpeg')
      },
      {
        id: 5,
        title: 'Lime', 
        description: 'Organic limes', 
        price: 2,
        quantity: 6, 
        image: require('../assets/lime.jpeg')
      },
    ]
  },
  mutations: {
    sortProducts (state, {column, type}) {
      state.products.sort((aa, bb) => {
        let a = aa[column];
        let b = bb[column];
        if (column == state.sortedBy) {
          [a, b] = [b, a]
        }

        if (type == 'numeric') {
          return a - b;
        }

        a = a.toUpperCase();
        b = b.toUpperCase();

        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }

        return 0;
      })
    },
    saveSort (state, {column}) {
      if (state.sortedBy !== column){
        state.sortedBy = column
      } else {
        state.sortedBy = ""
      }
    },
    saveImage (state, {image, productId}) {
      let index = state.products.findIndex(p => p.id === productId)
      state.products[index].image = image;
      state.message = `${state.products[index].title} images updated`
    },
    saveAttribute (state, {column, value, productId}) {
      let index = state.products.findIndex(p => p.id === productId)
      state.products[index][column] = value;
      state.message = `${state.products[index].title} ${column} updated`
    },
    addProduct (state) {
      state.products.unshift({
        id: state.products.length + 1,
        title: 'New Product',
        description: '', 
        price: 0,
        quantity: 1, 
        image: require('../assets/new.jpeg')
      })
    }
  },
  actions: {
    sortProducts (context, payload) {
      context.commit('sortProducts', payload)
      context.commit('saveSort', payload)
    },
    saveImage (context, payload) {
      context.commit('saveImage', payload)
    },
    saveAttribute (context, payload) {
      context.commit('saveAttribute', payload)
    },
    addProduct (context) {
      context.commit('addProduct')
    }
  },
  getters: {
    getProducts: state => {
      return state.products
    },
    getMessage: state => {
      return state.message
    }
  }
})
