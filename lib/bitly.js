// Util for parsing a google maps response
export const shorten = async (link) => {
  let promise = new Promise((resolve, reject) => {
    fetch("/.netlify/functions/bitly", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({link})
    }).then((response) => {
      return response.json();
    }).then(json => {
      resolve(json);
    }).catch(ex => {
      reject(ex);
    });
  });
  return promise;
}
