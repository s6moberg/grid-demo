<template>
  <div>
    <b-container class="bv-row">
      <b-row>
        <b-col><b-button @click="sortProducts({column: 'title', type: 'string'})" variant="danger">Title</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'description', type: 'string'})" variant="danger">Description</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'price', type: 'numeric'})" variant="danger">Price</b-button></b-col>
        <b-col><b-button @click="sortProducts({column: 'quantity', type: 'numeric'})" variant="danger">Quantity</b-button></b-col>
        <b-col><b-button variant="danger">Image</b-button></b-col>
      </b-row>
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
          <ProductAttribute 
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

export default {
  name: 'Grid',
  components: {
    ProductAttribute
  },
  computed: {
    ...mapGetters(['getProducts'])

  },
  methods: {
    ...mapActions(['sortProducts'])
  }
}
</script>

<style scoped>

</style>
