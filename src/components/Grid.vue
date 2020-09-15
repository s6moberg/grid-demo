<template>
  <div id='main'>
    <b-container class="bv-row container">
      <b-row>
        <b-col>
          <b-card class="text-center">
          {{ getMessage }}
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col><b-button @click="sortProducts({column: 'title', type: 'string'})" variant="danger">Title</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'description', type: 'string'})" variant="danger">Description</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'price', type: 'numeric'})" variant="danger">Price</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'quantity', type: 'numeric'})" variant="danger">Quantity</b-button></b-col>
        <b-col><b-button @click="addProduct" variant="success">Add Product</b-button></b-col>
      </b-row>
      <br />
      <b-row v-for="product in getProducts" :key="product.id">
        <b-col>
          <ProductAttribute 
            :product="product"
            column="title" 
          />
        </b-col>
        <b-col>
          <ProductAttribute 
            :product="product"
            column="description" 
          />
        </b-col>
        <b-col>
          <ProductAttribute 
            :product="product"
            column="price" 
          />
        </b-col>
        <b-col>
          <ProductAttribute 
            :product="product"
            column="quantity" 
          />
        </b-col>
        <b-col>
          <ProductImage
            :product="product"
            column="image" 
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductAttribute from './ProductAttribute.vue'
import ProductImage from './ProductImage.vue'

export default {
  name: 'Grid',
  components: {
    ProductAttribute,
    ProductImage
  },
  computed: {
    ...mapGetters(['getProducts', 'getMessage'])

  },
  methods: {
    ...mapActions(['sortProducts', 'addProduct'])
  }
}
</script>

<style scoped>
  #main {
    min-width: 1200px;
  }
</style>
