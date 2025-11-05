const API_KEY = "apikey"

const fetchSomething = async () => {
  const res = await fetch("http://example.com/something", {
    headers: {
      "Authrization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      "username": "John Doe",
      "password": "Password"
    }),
  });

  const data = await res.json();

  return data;
}
