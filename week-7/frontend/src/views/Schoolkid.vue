<script>
// @ is an alias to /src
import SchoolkidCard from '@/components/schoolkid-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Schoolkid',
  components: {
    SchoolkidCard
  },
  computed: {
    ...mapState(['schoolkid'])
  },
  methods: {
    ...mapActions(['fetchSchoolkid'])
  },
  created() {
    this.fetchSchoolkid(this.$route.params.id)
  }
}
</script>

<template lang="pug">
  main
    section
      schoolkid-card(:schoolkid="schoolkid")
</template>

<style scoped>
</style>