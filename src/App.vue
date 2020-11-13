<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
html,body,#app {
  height: 100%;
  width: 100%;
  font-size: 100px;
}
*{
  margin: 0;
  padding: 0;
}
</style>
