export const EMPLOYEE_LOGIN = "EMPLOYEE_LOGIN";

export const employeeLogin = employee => {
  return { type: EMPLOYEE_LOGIN, employee };
};
