import OriginJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    OriginJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var key in data) {
    let value = data[key] ? data[key] : ''
    url += '&' + key + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
