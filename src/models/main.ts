import modelExtend from 'dva-model-extend'
import { model } from '../utils/model'
import { getUserList as fetchUserList } from '../services/index'
import Action from '../utils/action'
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
    userList: [],
  },
  reducers: {
    changeCount(state, { payload }) {
      return {
        ...state,
        count: payload
      }
    }
  },
  effects: {
    *fetchUserList({ payload }, { select, call, put }) {
      const { userList } =  yield select(state => state.main),
            { callback } = payload
      try {
        const res = yield call(fetchUserList)
        let filterList = res
        yield put(Action('updateState', { userList: filterList }))
        callback && callback()
      } catch(e) {
        console.error(e)
        callback && callback()
      }
    }
  }
})
