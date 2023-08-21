export default function swrFetcher(
  url: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  return fetch(url, init).then((res) => res.json());
}
