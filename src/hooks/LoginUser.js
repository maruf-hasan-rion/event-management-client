export default async function LoginUser(credentials) {
    return fetch("https://localhost:8080/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }