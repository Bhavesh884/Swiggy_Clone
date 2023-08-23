import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Bhavesh",
    email: "bhaveshbhanusali1@gmail.com",
  },
});
export default UserContext;
