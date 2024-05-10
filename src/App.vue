<script setup lang="ts">
import { io } from "socket.io-client";
import { onMounted, ref } from "vue";

const socket = io("ws://localhost:3000", {
  autoConnect: true,
});

const data = ref<string[]>([]);

onMounted(() => {
  socket.connect();

  socket.on("ping", (message) => {
    data.value.push(message);
  });
});

const handleButton = () => {
  fetch("http://localhost:3000/ping");
};
</script>

<template>
  Learn Socket IO
  <button @click="handleButton">ping</button>
  <div>
    <p v-for="d in data">
      {{ d }}
    </p>
  </div>
</template>
