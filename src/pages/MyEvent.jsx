import { useState } from "react";
import Login from "./login";

export default function MyEvent() {
  const [token, setToken] = useState();
  if (!token) {
    {
      return <Login setToken={setToken}></Login>;
    }
  }
  return <div>MyEvent</div>;
}
