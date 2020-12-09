app.component('recommend-form', {
  template:
  /*html*/
    `
      <form class="review-form" @submit.prevent="onSubmit">
      <h3>Would you recommend this product?</h3>
      <input type="radio" id="yes" v-model="recommend" :value="true">
      <label for="recommend">Yes</label><br>
      <input type="radio" id="no" v-model="recommend" :value="false">
      <label for="recommend">No</label><br>
      <input class="button" type="submit" value="Submit">
      </form>
    `,
  data() {
    return {
      recommend: null
    }
  },
  methods: {
    onSubmit() {
      if (this.recommend === null) {
        alert('Please choose the answer')
        return
      }

      console.log(this.recommend)
      this.$emit('recommend-submitted', this.recommend)
      this.recommend = null;
    }
  }
})