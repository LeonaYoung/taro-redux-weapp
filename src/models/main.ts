import modelExtend from 'dva-model-extend'
import { model } from '../utils/model'
// import Action from '../utils/action'
// import { setCacheData, getGlobalData } from '../utils'
// import {
//   getSongInfo as fetchSongInfo,
//   getMusicUrl as fetchMusicUrl,
//   getLyric as fetchLyric
// } from '../services/index'
// import eventEmitter from '../utils/eventEmitter'
// import * as Events from '../constants/event-types'

export default modelExtend(model,  {
  namespace: 'main',
  state: {
    count: 11,
  },
  reducers: {
    changeCount(state, { payload }) {
      return {
        ...state,
        count: payload
      }
    }
  },
})
