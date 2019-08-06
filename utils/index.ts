import 'moment/locale/zh-cn'
import moment from 'moment'

// 时间戳格式化
export const unixFormat = (v: number) => {
  const m = moment.unix(v)
  const hour = `0${m.hour()}`.substr(-2, 2)
  const minute = `0${m.minute()}`.substr(-2, 2)
  return `${m.month() + 1}月${m.date()}日${hour}:${minute}`
}

// 时间对比
export const dateCompare = v => {
  const today = moment().unix()
  const isAfter = moment(today).isAfter(v)
  return isAfter
}
