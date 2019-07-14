import Action from '../utils/action'

export const updateState = (namespace: string, payload?: any) => Action(`${namespace}/updateState`, payload)
export const fetchUserList = ({ callback }) => Action('main/fetchUserList', { callback })
