
<script>
// @ is an alias to /src
import SchoolkidCard from '@/components/schoolkid-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    SchoolkidCard
  },
   computed: {
    ...mapState(['schoolkids', 'counter'])
  },
    methods: {
    ...mapActions(['fetchSchoolkids', 'incrementCounter'])
  },
  created() {
    this.fetchSchoolkids(),
    this.incrementCounter()
  }
}
</script>

<template lang="pug"> 
  main
    section
      ol
        schoolkid-card(v-for="schoolkid in schoolkids", :schoolkid="schoolkid", :key="schoolkid.id")
    
</template>

<style scoped>
section {
  padding: 40px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}
.increment-button:hover {
  background-color: darkcyan;
  color: white;
}
</style>