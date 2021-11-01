<template>
<div>
  <div  class = "empty" v-if = "this.$root.$data.total == 0">
    <h1>Cart is Empty...</h1>
  </div>
  <CartList :products="getCart" />
</div>
</template>


<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    total() {
      return this.$root.$data.total;
    },
    getCart() {
      return this.$root.$data.cart;
    }
  },

}
</script>

<style>
.empty{
  text-align: center;
}
</style>
