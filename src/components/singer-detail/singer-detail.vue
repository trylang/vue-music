<template>
	<transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'

export default {

  name: 'singer-detail',

  data () {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.singerhaha.name
    },
    bgImage() {
      return this.singerhaha.avatar
    },
    ...mapGetters([
      'singerhaha'
    ])
  },
  created() {
    console.log(this.singerhaha)
    this._getDetail()
  },
  methods: {
    _getDetail() {
      if (!this.singerhaha.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singerhaha.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let musicData = item.musicData
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>