<script>
export default {
  name: 'SchoolkidCard',
  props: ['schoolkid'],
  computed: {
    schoolkidUrl() {
      return `/schoolkid/${this.schoolkid._id}`
    }
  }
}
</script>

<template lang="pug">
  article.card
    img(:src="`https://picsum.photos/300/200?random=${schoolkid._id}`", alt="")
    h2.card-title 
      router-link(:to="schoolkidUrl") {{ schoolkid.name }} 
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>
