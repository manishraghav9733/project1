import axios from "axios";

const employeeApi = () => {
  return axios.create({
    baseURL: "http://dummy.restapiexample.com"
  });
};

export default employeeApi;
