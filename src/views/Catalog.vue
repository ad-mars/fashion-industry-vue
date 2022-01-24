<template>
  <div class="container">
    <button @click="onButtonClick()">Test</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Catalog extends Vue {
  onButtonClick(): void {
  }
}
</script>
