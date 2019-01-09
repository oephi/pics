import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 
      "Client-ID dbddf44231d2381ebf1bbda8af75ffdd091926bc68c57be02bacce267cf7cd64"
  }
});