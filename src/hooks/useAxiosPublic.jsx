import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://hostel-hero-server.vercel.app",
  // baseURL: "import.meta.env.VITE_API_URL",
  baseURL: "https://event-management-server-liart-gamma.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
