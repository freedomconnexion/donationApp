<template>
  <v-card-title primary-title class="light-blue darken-4">
    <div>
      <p class="display-1 bold white--text">Give Freedom Today!</p>
      <div><span class="subheading white--text" style="font-style: italic">&ldquo;{{quote}}&rdquo;</span></div>
      <div><span class="subheading white--text">~{{author}}</span></div>
    </div>
  </v-card-title>
</template>

<script>

export default {
  data() {
    return { 
    }
  },
  props: ["quote", "author"],
}
</script>
