<template>
  <div class="home">
    <myheader></myheader>
  </div>
</template>

<script>
// @ is an alias to /src
import myheader from '@/components/myheader.vue'

export default {
  name: 'home',
  components: {
    myheader
  }
}
</script>
