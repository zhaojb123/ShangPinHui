<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floorList" :key="item.id" :floorList="item"></Floor>
    <Brand></Brand>
    <!-- <button @click="add">+1</button>
    <span>state的数据{{count}}</span>
    <button>-1</button> -->
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'MyHome',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  created () {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    })
  }
  // computed: {
  //   ...mapState(['count'])
  // },
  // methods: {
  //   add () {
  //     this.$store.dispatch('add')
  //   }
  // }
}
</script>

<style>

</style>
