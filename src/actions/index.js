import employeeApi from "../apis";

export const employeeList = async () => {
  const response = await employeeApi().get("/api/v1/employees");

  return response;
};
