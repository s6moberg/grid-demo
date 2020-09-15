<template>
  <div>
    <b-card class="text-center cell">
            <img :src="imgLocation">
            <b-form-input placeholder="Paste an image Url" @change="saveImage({image: imgLocation, productId: product.id})" v-model.lazy="imgLocation"></b-form-input>

    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductImage',
  props: ['product'],
  data() {
      return {
          imgLocation: this.product.image,
      }
  },
  methods: {
    ...mapActions(['saveImage'])
  }
}
</script>

<style scoped>
    img {
        max-width: 100px;
    }
    .cell {
        min-height: 200px;
        min-width: 150px;
    }
</style>