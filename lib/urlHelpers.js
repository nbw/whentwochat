export const encodeURLParam = (url, key, data) => {
  var url = new URL(url);
  url.searchParams.append(key, encode64(data));
  return url.toString();
}

export const decodeURLParam = (urlParams, key, _default) => {
  var searchParams = new URLSearchParams(urlParams);
  if (searchParams.has(key)) {
    return decode64(searchParams.get(key));
  } else {
    return _default;
  }
}

export const encode64 = (object) => {
		const encode = JSON.stringify(object);
		return Buffer.from(encode).toString("base64");
}

export const decode64 = (data) => {
  return JSON.parse(Buffer.from(data, 'base64').toString('ascii'));
}
