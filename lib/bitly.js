// Util for parsing a google maps response
export const shorten = async (url) => {
  const body = {
    link: url
  };

  let promise = new Promise((resolve, reject) => {
    fetch("/.netlify/functions/bitly", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json();
    }).then(json => {
      resolve(json);
    }).catch(ex => {
      console.log(ex);
      reject(ex);
    });
  });
  return promise;
}
