const connection = require("./connection.js");
const orderModel = () => {};

orderModel.allActiveOrders = (data, callback) =>
  connection.query(
    "SELECT o.id_order, t.id_board, e.e_name, DATE_FORMAT(o.o_datetime, '%d/%m/%Y a las %H:%i') AS o_datetime, SUM(so.s_cuantity * p.p_price) AS o_price FROM torder o INNER JOIN employee e ON(e.id_employee = o.id_employee) INNER JOIN board t ON(t.id_board = o.id_board) INNER JOIN suborder so ON(so.id_suborder = o.id_suborder) INNER JOIN product p ON(p.id_product = so.id_product) WHERE o.o_status = 'a' GROUP BY o.id_order ORDER BY o_datetime DESC",
    data,
    callback
  );

orderModel.allWaitingOrders = (data, callback) =>
  connection.query(
    "SELECT o.id_order, t.id_board, e.e_name, DATE_FORMAT(o.o_datetime, '%d/%m/%Y a las %H:%i') AS o_datetime FROM torder o INNER JOIN employee e ON(e.id_employee = o.id_employee) INNER JOIN board t ON(t.id_board = o.id_board) WHERE o.o_status = 'w' ORDER BY o_datetime DESC",
    data,
    callback
  );

orderModel.allActiveEmployees = (data, callback) =>
  connection.query(
    "SELECT id_employee, e_name FROM employee WHERE e_status = 'a' ORDER BY e_name",
    data,
    callback
  );

orderModel.allActiveTables = (data, callback) =>
  connection.query(
    "SELECT id_board FROM board WHERE b_disponibility = 'a' ORDER BY id_board",
    data,
    callback
  );

orderModel.addOrder = (data, callback) =>
  connection.query(
    "INSERT INTO torder(id_employee, id_board) VALUES(?, ?)",
    data,
    callback
  );

orderModel.deleteOrder = (data, callback) =>
  connection.query("DELETE FROM torder WHERE id_order = ?", data, callback);

module.exports = orderModel;
