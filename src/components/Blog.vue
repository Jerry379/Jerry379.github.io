<template>
  <div class="blog" v-html="mark2html" v-highlight>

  </div>
</template>

<script>
import Marked from 'marked'
import axios from 'axios'
export default {
  name: 'blog',
  data () {
    return {
      mark2html: ''
    }
  },
  mounted: function () {
    this.mark2htmlfun()
  },
  methods: {
    mark2htmlfun: function () {
      axios.get('http://localhost:8080/static/articles/MockJs.md')
        .then((response) => {
          this.$data.mark2html = Marked(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }
  }
}
</script>

<style>
  .blog{
    width: 50%;
    padding-left: 15%;
    padding-right: 15%;
    overflow: auto;
    padding-top: 50px;
  }
  .blog h1{
    text-align: center;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
    color: #2A2935;
    line-height: 1.5;
  }
  img{
    margin: 0 auto;
    display: block;
  }
</style>
