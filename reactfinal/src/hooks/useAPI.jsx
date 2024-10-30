function useAPI(table, filter_key = "", method = "GET", data = {}) {
  const api_token = "0lUx8E4GxrmuytmxCu_58ZG1NRLp35oz";
  const base_url = "http://localhost:8055/items";

  const headers = {
    Authorization: `Bearer ${api_token}`,
    "Content-Type": "application/json",
  };

  const handleResponse = (response) => {
    if (!response.ok) {
      return Promise.reject(new Error("unseccessful fetch"));
    }
    return response.json().then((data) => data.data);
  };

  if (method === "PATCH" || method === "POST") {
    return fetch(`${base_url}/${table}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  if (method === "DELETE") {
    return fetch(`${base_url}/${table}/${filter_key}`, {
      method: method,
      headers: headers,
    }).then(handleResponse);
  }

  if (filter_key === "") {
    return fetch(`${base_url}/${table}`, {
      method: method,
      headers: headers,
    }).then(handleResponse);
  }
  // console.log(filter_key);

  return fetch(`${base_url}/${table}`, {
    method: method,
    headers: headers,
  }).then(handleResponse);
}

export default useAPI;
