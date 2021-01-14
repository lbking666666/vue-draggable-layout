<template>
    <div class="hello">
        1111
    </div>
</template>
<script>
import { create } from '@/api/index'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {
        this.createVue()
    },
    methods: {
        createVue() {
          let params = {
            path:'big'
          }

          create(params).then(res => {
            console.log(res)
          })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>