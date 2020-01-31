import employeeApi from "../apis";

export const employeeList = async () => {
  const response = await employeeApi().get("/api/v1/employees");

  return response;
};
export const deleteEmployeeList = async (id) => {
  const response = await employeeApi().delete(`/api/v1/delete/${id}`);

  return response;
};