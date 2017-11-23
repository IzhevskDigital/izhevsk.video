const env = (process.env.NODE_ENV === 'production') ? require('../.env.production') : require('../.env.development')
const baseUri = 'https://www.googleapis.com/youtube/v3'
const apiKey = env.YOUTUBE_API_KEY
const title = 'For all'
//const tweet = encodeURIComponent(title)

export default {
  app: {
    name: 'Video Izhevsk',
    url: 'https://izhevskdigital.github.io/izhevsk.video/',
    title: title,
    description: ' ',
    author: 'Izhevsk Digital',
    logo: {
      normal: 'dist/logo.png',
      mini: 'dist/logo.png',
      share: 'dist/logo.png'
    },
    github: {
      username: 'izhevskdigital',
      repo: 'izhevskdigital/izhevsk.video'
    },
    links: [
      '<a class="fa fa-github" href="https://github.com/izhevskDigital/izhevsk.video" data-count-href="/izhevskdigital/izhevsk.video/stargazers" data-count-api="/repos/izhevskdigital/izhevsk.video#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star izhevskdigital/izhevsk.video on GitHub"></a>',
      '<a><img src="http://bulma.io/images/bulma-logo.png" width="112" height="28"></a>',
      '<a><img src="static/logo.png" style="width:28px" alt="Vue.js"></a>'
    ]
  },
  api: {
    key: apiKey,
    search: {
      endpoint: baseUri + '/search',
      params: {
        key: apiKey,
        part: 'snippet',
        videoEmbeddable: true,
        safeSearch: 'strict',
        fields: 'prevPageToken,nextPageToken,items/id/videoId'
      }
    },
    videos: {
      endpoint: baseUri + '/videos',
      params: {
        key: apiKey,
        part: 'contentDetails,snippet,statistics',
        fields: 'items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,tags,thumbnails,title),statistics(dislikeCount,likeCount,viewCount)),nextPageToken,prevPageToken'
      }
    },
    channels: {
      endpoint: baseUri + '/channels',
      params: {
        key: apiKey,
        part: 'snippet,statistics,brandingSettings'
      }
    }
  }
}
