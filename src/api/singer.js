import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getSingerList() {
  const url = 'https://szc.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    order: 'listen',
    begin: 0,
    num: 80,
    singerid: singerId,
    uin: 0,
    format: 'jsonp',
    notice: 0,
    platform: 'h5page',
    needNewCode: 1,
    from: 'h5',
    _: 1506067351325
  })
  return jsonp(url, data, options)
}