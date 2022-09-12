import { v4 as uuidv4 } from 'uuid'
// 生成一个随机字符串,且每次执行不发生变化
export const getUUID = () => {
  let uuidToken = localStorage.getItem('UUIDTOKEN')
  if (!uuidToken) {
    uuidToken = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuidToken)
  }
  return uuidToken
}
