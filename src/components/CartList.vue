<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="image">
          <img :src="'/images/products/'+product.image">
        </div>
        <div class="info">
          <h1>{{product.name}}</h1>
          <p>{{product.country}}</p>
          <h1>Quantity:{{product.quantity}}</h1>
        </div>
        <div class="price">
          <h2>{{product.price}}</h2>
          <button class="auto" v-on:click='remove(product)'>Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
    remove(product){
      for(let i = 0; i < this.$root.$data.cart.length; i++){
        if(this.$root.$data.cart[i].id == product.id){
          this.$root.$data.total-=this.$root.$data.cart[i].quantity;
          this.$root.$data.cart.splice(i, 1);
          break;
        }
      }

    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 50px;
}

.products {

  flex-direction: column;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  border-radius: 90px;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 10px 30px;
  height: 100px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  margin-top: 80px;
  margin-left: 30px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
