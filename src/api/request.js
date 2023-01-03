export const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

const isResJson = ({ headers }) =>
  headers.get('content-type')?.includes('application/json')

export const request = async (url, opts = {}) => {
  let response = await fetch(url, {
    ...opts,
    headers: defaultHeaders,
  })

  let data = isResJson(response) ? await response.json() : await response.text()

  if (response.ok) {
    return data
  } else {
    return Promise.reject(response)
  }
}
