const API_KEY = "8d963b923edb76fde3381547fe95ed586175ee8418d96d7c43748de186487ea3"

const fetchSomething = async () => {
  const res = await fetch("http://example.com/something", {
    headers: {
      "Authrization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      username: "John Doe",
      password: "Password"
    }),
  });

  const data = await res.json();

  return data;
}
