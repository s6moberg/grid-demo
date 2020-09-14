import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortedBy: 'id',
    products: [
      {
        id: 1,
        title: 'apple', 
        description: 'Red delicouse apples', 
        price: 5,
        quantity: 6, 
        image: 'test'
      },
      {
        id: 2,
        title: 'banana', 
        description: 'Bannas from flordia', 
        price: 4,
        quantity: 10, 
        image: 'test'
      },
      {
        id: 3,
        title: 'peach', 
        description: 'Great peaches', 
        price: 3,
        quantity: 2, 
        image: 'test'
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
      
    }
  },
  actions: {
    sortProducts (context, payload) {
      context.commit('sortProducts', payload)
      context.commit('saveSort', payload)
    }
  },
  getters: {
    getProducts: state => {
      return state.products
    }
  }
})
