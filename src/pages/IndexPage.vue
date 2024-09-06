<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <div>{{ codestudent }}</div>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
      <p>{{ nickName }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'ฉันรักเขา',
      codestudent: '6604101409',
      firstName: 'Jetsadaporn',
      lastName: 'Chaiwong',
      nickName: 'Kongfilm',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit-form');
    },
  }
}
</script>
