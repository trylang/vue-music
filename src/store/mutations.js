// import * as A  :表示可以用 A.xx 来表示。避免了花括号的引入。
// mutations 这个对象里面，都是mutation的修改方法。方法名是[types.SET_SINGER]，第一个参数state是state.js中状态树的state,
// 第二个参数singer 则是提交给mutation传的paload,即是传的参数。

// 此文件里，没有涉及到异步操作，也没有什么封装。可以在此直接做修改。

import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
	  state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mutations