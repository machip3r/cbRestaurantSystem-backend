const employeeModel = require("../models/employee_model");
let employeeControl = () => {};

employeeControl.addEmployee = (request, result) => {
  const body = request.body;

  if (
    body.e_name &&
    body.e_phone &&
    body.e_email &&
    body.e_password &&
    body.e_admin
  )
    employeeModel.addEmployee(
      [body.e_name, body.e_phone, body.e_email, body.e_password, body.e_admin],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result.status(202).send({ message: "Se registro el nuevo mesero" })
          : result.status(500).send({ message: "No se registro el mesero" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

employeeControl.allEmployees = (request, result) =>
  employeeModel.allEmployees([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

employeeControl.setStatusEmployee = (request, result) => {
  const body = request.body;

  if (body.e_status && body.id_employee)
    employeeModel.setStatusEmployee(
      [body.e_status, body.id_employee],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result
              .status(200)
              .send({ message: "Estado del empleado actualizado" })
          : result
              .status(500)
              .send({ message: "Error al cambiar el estado del empleado" })
    );
  else result.status(400).send({ message: "Peticion incorrecta" });
};

employeeControl.updateEmployee = (request, result) => {
  const body = request.body;

  if (
    body.e_name &&
    body.e_phone &&
    body.e_email &&
    body.e_password &&
    body.e_admin &&
    body.e_status &&
    body.id_employee
  )
    employeeModel.updateEmployee(
      [
        body.e_name,
        body.e_phone,
        body.e_email,
        body.e_password,
        body.e_admin,
        body.e_status,
        body.id_employee,
      ],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result.status(202).send({ message: "Empleado actualizado" })
          : result.status(500).send({ message: "No se actualizó el empleado" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

employeeControl.activeEmployees = (request, result) =>
  employeeModel.activeEmployees([], (error, rows) =>
    error
      ? result
          .status(500)
          .send({ message: "Error al obtener los empleados activos" })
      : result.status(202).send(rows)
  );

employeeControl.inactiveEmployees = (request, result) =>
  employeeModel.inactiveEmployees([], (error, rows) =>
    error
      ? result
          .status(500)
          .send({ message: "Error al obtener los empleados inactivos" })
      : result.status(202).send(rows)
  );

module.exports = employeeControl;
