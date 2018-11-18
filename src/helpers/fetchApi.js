const baseUrl = 'https://demo4452328.mockable.io/'

export default function fetchApi (url) {
  return fetch(`${baseUrl}/${url}`).then((response) => response.json())
}
