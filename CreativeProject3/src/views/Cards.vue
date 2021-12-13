<template>
    <div class="message">
        <h1>Use these Cards to ask meaningfull Questions and build close Relationships</h1>
        <div class="cards" v-for="card in products.items" :key="card.id">
            <div class="card-question"> 
                {{ card.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cards',

  computed: {
    products() {
      return this.$root.$data.products[0];
    }
  }
}
</script>


<style scoped>

.message{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px;

}

.cards {
    flex: 0 0 35%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.4em;

    height: 200px;
    width: 350px;

    background-color: darkred;
    color: white;
    border-radius: 50px;

    margin: 20px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: 0.3s;
}

.cards:hover {

    background-color: red;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.75), 0 6px 20px 0 rgba(0, 0, 0, 0.75);
}

</style>