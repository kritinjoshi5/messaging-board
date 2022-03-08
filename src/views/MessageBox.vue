<template>
  <div class="message-box d-flex align-center justify-center">
    <textarea
      class="textarea"
      name="message"
      v-model="message"
      autocomplete="false"
      resize="false"
      rows="1"
    ></textarea>
    <button class="button" @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  data() {
    return {
      message: null,
    }
  },
  methods: {
    sendMessage() {
      // Sent a message to messages api
      // API accept params as below
      // { 'text': << your message >> }
      this.$http.post('messages/', {"text":this.message}).then(
        (resp) => {
          console.log(resp)
          this.message =  null
          this.$store.dispatch('NEW_MESSAGE', resp.data)
        },
        (error) => {
          console.error(error, 'Error sending message')
        }
      )
    }
  }
};
</script>

<style lang="scss" scoped>
.message-box {
  width: 99vw;
}
.textarea {
  width: calc(96vw - 66px);
  border-radius: 6px;
//   border-bottom-left-radius: 14px;
  resize: none;
  padding: 10px 16px;
}

@media (max-width: 900px) {
  .message-box {
    width: 96vw;
  }
}
</style>