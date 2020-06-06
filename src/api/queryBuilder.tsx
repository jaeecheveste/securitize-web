export function buildQueryParams(query: any): string {
  let str = [];
  if (typeof query !== "object") return "";

  for (let k in query)
    if (query.hasOwnProperty(k)) {
      str.push(encodeURIComponent(k) + "=" + encodeURIComponent(query[k]));
    }
  return `?${str.join("&")}`;
}
