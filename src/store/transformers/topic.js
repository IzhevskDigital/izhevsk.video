export default function(topic) {
  return {
    id: topic.id,
    type: topic.type,
    title: topic.title,
    score: topic.score,
    site: topic.site || null,
    logo: topic.logo || '/static/topics/icons/$1.svg'.replace(/\$1/, topic.id),
    color: topic.color,
    location: topic.location,
    locationRadius: topic.locationRadius,
    maxResults: topic.maxResults,
    words: topic.words,
    backgroundImage: topic.backgroundImage || ''
  }
}
