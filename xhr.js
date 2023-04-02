const url = "https://jsonplaceholder.typicode.com/users";

const Axios = (method, url, body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      const data = xhr.response;
      resolve(data);
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
};

const obj = {
  name: "karan",
  job: "Developer",
};

Axios("POST", url, obj)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
