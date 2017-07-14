const env = (process.env.NODE_ENV === 'production') ? require('../.env.production') : require('../.env.development')
const baseUri = 'https://www.googleapis.com/youtube/v3'
const apiKey = env.YOUTUBE_API_KEY
const title = 'For all'
//const tweet = encodeURIComponent(title)

export default {
  app: {
    name: 'Video Izhevsk',
    url: 'https://izhevsk.github.io/izhevsk.video/',
    title: title,
    description: ' ',
    author: 'Izhevsk',
    logo: {
      normal: 'build/images/logo.svg',
      mini: 'build/images/logo-mini.svg',
      share: 'build/images/weblearn-banner.png'
    },
    github: {
      username: 'izhevsk',
      repo: 'izhevsk/izhevsk.video'
    },
    links: [
      '<a class="github-button" href="https://github.com/izhevsk/izhevsk.video" data-count-href="/izhevsk/izhevsk.video/stargazers" data-count-api="/repos/izhevsk/izhevsk.video#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star izhevsk/izhevsk.video on GitHub">Star</a>'
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
