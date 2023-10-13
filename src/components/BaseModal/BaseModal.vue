<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <button class="modal-close" @click="$emit('closeModal')"><img src="../../assets/modal-close.svg"
                                                                      alt="modal-close" />
        </button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 10px;
  top: 10px;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
