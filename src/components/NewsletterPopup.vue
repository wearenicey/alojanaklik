<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-show="showModal">
      <div class="modal-content">
        <slot></slot> <!-- This will be replaced by whatever you put inside the <Modal> tags when using this component -->
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.showModal = true;
    }, 6000); // 6000 milliseconds = 6 seconds
  }
};
</script>