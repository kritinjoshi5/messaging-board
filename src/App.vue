<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Message Board</router-link> |
      <router-link to="/about">About App</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.d-flex {
  display: flex;
  gap: 4px;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.button {
  padding: 10px 16px;
  background: transparent;
  border: 1px solid grey;
  border-radius: 6px;
  outline: none;
  &.is-small {
    padding: 4px 6px;
  }
  &.is-warn {
    background: #ff000033;
  }
}

.button:hover {
  background: #42b98338;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
