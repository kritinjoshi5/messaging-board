<template>
  <div>
    <div>
      Sort Messages:
      <label for="html">Old First</label>
      <input
        type="radio"
        v-model="sortBy"
        id="html"
        name="fav_language"
        value="asc"
      />
      <label for="css">New First</label>
      <input
        type="radio"
        v-model="sortBy"
        id="css"
        name="fav_language"
        value="des"
      />
    </div>
    <br />
    <div class="message-board">
      <MessageItem
        v-for="(message, index) in messages"
        :key="`${index}-message`"
        :message="message"
      >
      </MessageItem>
    </div>
  </div>
</template>

<script>
import MessageItem from "@/components/MessageItem.vue";
export default {
  name: "MessageBoard",
  components: {
    MessageItem,
  },
  data() {
    return {
      sortBy: "asc",
    };
  },
  watch: {
    sortBy() {
      const messages = this.$store.state.messages || [];
      this.messages = messages.reverse();
    },
  },
  computed: {
    messages: {
      get() {
        // this is automatically update after each change in store > state > messages
        return this.$store.state.messages || [];
      },
      set() {
        return;
      },
    },
  },
  mounted() {
    this.$store.dispatch("GET_MESSAGES"); // can add params such as limit and skip as a second param.
  },
};
</script>

<style lang="scss" scoped>
.message-board {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 200px);
  width: 100vw;
  overflow: auto;
}
</style>