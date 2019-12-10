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
  li.card
    img(:src="`https://picsum.photos/50/50?random=${schoolkid._id}`", alt="")
    h2.card-title 
      router-link(:to="schoolkidUrl") {{ schoolkid.name }} {{ schoolkid.surname }}
    div(v-if="schoolkid.grades.length > 0")
  
   
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  justify-content: flex-start;
  align-items:flex-end;
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 10px;
 
}
.card > img {
  border-radius: 50%;
  padding-right: 20px;
}
a{
 color: #2c3e50;
  text-decoration: none;
}

</style>
