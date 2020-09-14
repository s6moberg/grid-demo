<template>
  <div>
    <b-card class="text-center">
        <div class="bg-secondary text-light">
            {{ product[column] }}
        </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductAttribute',
  props: ['column', 'product'],
  methods: {
    ...mapActions(['sortProducts'])
  }
}
</script>

<style scoped>

</style>
