<template>
<div class = "body">
  <p class="intro">Pick And Choose</p>
  <p class="products">
    <!-- <router-link v-for="product in products" :key="product.id" :to="'/product/' + product.id">
      <img src="/images/gift.gif">
    </router-link> -->
    <router-link to="/cards">
      <img src="/images/gift.gif">
    </router-link>

    <router-link to="/store">
      <img src="/images/gif.gif">
    </router-link>

    
    
  </p>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

.body{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
}

.intro {
  margin-top: 80px;
  font-style: italic;
  font-size: 2em;
  
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
}

.products img {
  border: 1px solid #333;
  height: 280px;
  width: 340px;
  margin-left: 100px;
  margin-right: 100px;
  object-fit: cover;
  border: transparent;
}
</style>
