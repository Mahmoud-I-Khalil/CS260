<template>
<div id="app">
  <div class="menu">

    <div class="header">
      <router-link class="albums-link" style="text-decoration: none;" to="/">
        <h1>We're not Really Strangers</h1>
      </router-link> 
    </div>

    <div class="links">

      <router-link class="albums-link" style="text-decoration: none;" to="/store">
        <div class="menu-item">
          <div class="menu-label">Shop</div>
        </div>
      </router-link>

      <router-link style="text-decoration: none;" to="/cart">
        <div class="menu-item cart">
          <div class="menu-label total">Cart</div>
        </div>
      </router-link>

      <router-link style="text-decoration: none;" to="/about">
        <div class="menu-item">
          <div class="menu-label">About</div>
        </div>
      </router-link>

    </div>
  </div>

  <div class="content">
    <router-view />
  </div>
  <div class="footerr">
    <div class="footer">
      <a href="https://github.com/Mahmoud-I-Khalil/CS260/tree/main/CreativeProject3/src" target="_blank">GitHub</a>
    </div>
  </div>
</div>
</template>



<style>

html {}

body {
  margin: 50px 100px;
  font-family: 'Bellota Text', cursive;
  background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url("Background.gif");
  background-color: darkred;
  color: #eee;

}

#app {

}

.menu-item:hover{

  color: darkred;

}

.menu{
  display: flex;
  justify-content: space-between;

}

.links{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

a{
  text-decoration: none;
  color: #eee;
}

.content {
  min-height: 500px;
}

.footerr{
  display: flex;
  flex-wrap: wrap;
  
}

.footer {
  margin: auto;
  padding: 30px;
  width: 200px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  background-color: darkred;
}

.footer:hover {
  background-color: red;
}
</style>
