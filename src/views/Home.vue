<template>
  <div class="d-flex flex-col">
    <MessageBoard></MessageBoard>
    <MessageBox></MessageBox>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageBoard from './MessageBoard.vue'
import MessageBox from './MessageBox.vue'

export default {
  name: 'Home',
  components: {
    MessageBoard,
    MessageBox
  },
}
</script>