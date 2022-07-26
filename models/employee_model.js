const connection = require("./connection");

let employeeModel = () => {};

employeeModel.addEmployee = (data, callback) => {
  connection.query(
    "INSERT INTO employee(e_name, e_phone, e_email, e_password, e_admin) VALUES (?, ?, ?, ?, ?) ",
    data,
    callback
  );
};

employeeModel.allEmployees = (data, callback) => {
  connection.query("SELECT * FROM employee", [], callback);
};

employeeModel.setStatusEmployee = (data, callback) => {
  connection.query(
    "UPDATE employee SET e_status = ? WHERE id_employee = ?",
    data,
    callback
  );
};

employeeModel.activeEmployees = (data, callback) => {
  connection.query("SELECT * FROM employee WHERE e_status = 'a'", [], callback);
};

employeeModel.inactiveEmployees = (data, callback) => {
  connection.query("SELECT * FROM employee WHERE e_status = 'i'", [], callback);
};

employeeModel.updateEmployee = (data, callback) => {
  connection.query(
    "UPDATE employee SET e_name = ?, e_phone = ?, e_email = ?, e_password = ?, e_admin = ?, e_status = ? WHERE id_employee = ?",
    data,
    callback
  );
};

module.exports = employeeModel;
