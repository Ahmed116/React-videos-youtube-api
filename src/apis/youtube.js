import axios from 'axios'
const KEY = 'AIzaSyDfGwRe46YldWE7BEXgG3cJaHIEw49lhsA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
