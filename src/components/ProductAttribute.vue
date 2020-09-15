<template>
  <div>
    <b-card class="text-center cell">
        <b-form-input @change="saveAttribute({column, value: cellValue, productId: product.id})" v-model="cellValue"></b-form-input>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductAttribute',
  props: ['column', 'product'],
  data() {
      return {
          cellValue: this.product[this.column]
      }
  },
  methods: {
    ...mapActions(['sortProducts', 'saveAttribute'])
  }
}
</script>

<style scoped>
    .cell {
        min-height: 200px;
        min-width: 150px;
    }
</style>
