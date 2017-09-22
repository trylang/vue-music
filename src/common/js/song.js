// 将数据直接可以dom绑定化，使用类比直接创建对象有优势，可扩展性强
export default class Song {
  constructor({id, mid, singer, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

// 工厂化，避免在实例化的时候写一堆代码
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
	  return ''
  }
  singer.forEach((s) => {
	  ret.push(s.name)
  })
  return ret.join('/')
}