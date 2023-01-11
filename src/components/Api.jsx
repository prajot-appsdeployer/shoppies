import axios from "axios";

export const Api = axios.get("https://fakestoreapi.com/products/");
// useEffect(() => {
//   Api.then((res) => setItem(res.data)).catch((err) => console.log(err));
// }, []);
