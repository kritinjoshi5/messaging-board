<template>
  <div class="message-container" content @mouseleave="isHovered = false">
    <div>
      {{ message.text }}
    </div>
    <div class="message-actions" @click="isHovered = true">
      <div class="icon">...</div>
      <div class="action-container">
        <button
          class="button is-small is-warn"
          :disabled="deleting"
          v-if="isHovered"
          @click="deleteMessage()"
        >
          Delete
        </button>
      </div>
    </div>
    <p class="time-container">
        {{ message.timestamp | date }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      default: null,
    },
  },
  filters: {
      date(val) {
        const date = new Date(val).toLocaleDateString();
        let returnString = date;
        if (date === new Date().toLocaleDateString()) {
            returnString = 'Today,';
        }
        return returnString += ` ${new Date(val).toLocaleTimeString()}`
      }
  },
  data() {
    return {
      isHovered: false,
      deleting: false,
    };
  },
  methods: {
    deleteMessage() {
      this.deleting = true;
      this.$http.delete(`messages/${this.message.id}`).then(
        () => {
          this.deleting = false;
          this.$store.dispatch("DELETE_MESSAGE", this.message);
        },
        (error) => {
          this.deleting = false;
          console.error(error, "error deleting message");
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.message-container {
  width: max-content;
  background: #42b9831a;
  padding: 16px 36px 16px 16px;
  border: 2px solid #42b98396;
  border-radius: 8px;
  text-align: start;
  position: relative;
}
.message-container:not(:last-child) {
  margin-bottom: 8px;
}
.message-actions {
  position: absolute;
  top: 0;
  right: 0;
}
.icon {
  transform: rotateZ(90deg);
  width: min-content;
  float: right;
  font-weight: 600;
}
.action-container {
  background: #ffffff8f;
  backdrop-filter: blur(5px);
  position: absolute;
  top: 20px;
  right: 4px;
  width: min-content;
  height: min-content;
}
.time-container {
    font-size: 10px;
    margin-bottom: -10px;
    float: right;
    margin-right: -24px;
}
</style>