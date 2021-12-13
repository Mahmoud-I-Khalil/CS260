<template>
    <div class="container">
        <h1 v-if="empty" class="i">Oh no! Your Cart is empty 😢</h1>
        <div class="items" v-for="items in products" :key="items.name">
            <div class="item-image"> 
                <img :src="'/images/'+items.image">
            </div>
            <div class="collab">
                    <div class="name"> {{items.name}} </div>
                    <div class = "descriptionI"> "{{items.description}}"</div>
                    <button class="remove" @click="removeFromCart(items)">X</button>
            </div>
            <div class="description">
                <div class= "price">{{items.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',

  computed: {
    products() {
      return this.$root.$data.cart;
    },

    empty() {
      return this.$root.$data.cart.length === 0;
    }
  },

  methods:{
    removeFromCart(item){
          
        let index = this.$root.$data.cart.findIndex(product => product.name === item.name);

        if (this.$root.$data.cart[index].quantity > 1) {
        this.$root.$data.cart[index].quantity -= 1;
        } else {
        this.$root.$data.cart.splice(index, 1);
        }
        this.$forceUpdate();

    }}


}


</script>


<style scoped>

.message{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px;

}

.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

img{
    height: 200px;
    width: 220px;
    border-radius: 60px;
}

.items{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 20px 0;
    width: 270px;

}

.items:hover{
    
    background: linear-gradient( rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25) );
    border-radius: 40px;
}

.collab{
    text-align: center;
    background: darkred;
    color: white;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
}
.description{
    display: flex;
    align-items: center;
}

.name{
    font-size: 1.2em;
}

.buy {
  font-size: .4em;
  background-color: lightcyan;
  border-radius: 6px;
  margin-right: 8px;
  padding: 2px 6px;
}

.buy:hover {
  background-color: lightskyblue;
}



</style>