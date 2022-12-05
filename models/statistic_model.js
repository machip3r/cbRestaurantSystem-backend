const connection = require("./connection.js");
const statisticModel = () => {};

statisticModel.todayProfit = (data, callback) =>
  connection.query(
    "SELECT DATE_FORMAT(p_datetime, '%Y-%m-%d') AS p_date_profit, SUM(p_total) AS p_profit FROM payment GROUP BY p_date_profit HAVING p_date_profit = ?",
    data,
    callback
  );

statisticModel.monthProfits = (data, callback) =>
  connection.query(
    "SELECT DATE_FORMAT(p_datetime, '%m') AS p_month_profit, AVG(p_total) AS p_profit FROM payment GROUP BY p_month_profit ORDER BY p_month_profit",
    data,
    callback
  );

statisticModel.allOrdersPerDate = (data, callback) =>
  connection.query(
    "SELECT o.id_order, t.id_board, e.e_name, o.o_status FROM torder o INNER JOIN employee e ON(e.id_employee = o.id_employee) INNER JOIN board t ON(t.id_board = o.id_board) WHERE DATE_FORMAT(o.o_datetime, '%Y-%m-%d') = ? ORDER BY o_datetime DESC",
    data,
    callback
  );

statisticModel.allOrdersPerTable = (data, callback) =>
  connection.query(
    "SELECT o.id_order, t.id_board, e.e_name, DATE_FORMAT(o.o_datetime, '%H:%i') AS o_datetime, o.o_status FROM torder o INNER JOIN employee e ON(e.id_employee = o.id_employee) INNER JOIN board t ON(t.id_board = o.id_board) WHERE o.id_board = ? AND DATE_FORMAT(o.o_datetime, '%Y-%m-%d') = ? ORDER BY o_datetime DESC",
    data,
    callback
  );

statisticModel.allOrdersPerEmployee = (data, callback) =>
  connection.query(
    "SELECT o.id_order, t.id_board, e.e_name, DATE_FORMAT(o.o_datetime, '%H:%i') AS o_datetime, o.o_status FROM torder o INNER JOIN employee e ON(e.id_employee = o.id_employee) INNER JOIN board t ON(t.id_board = o.id_board) WHERE o.id_employee = ? AND DATE_FORMAT(o.o_datetime, '%Y-%m-%d') = ? ORDER BY o_datetime DESC",
    data,
    callback
  );

statisticModel.countOrdersPerTable = (data, callback) =>
  connection.query(
    "SELECT COUNT(*) AS nOrdersPerTable FROM torder WHERE id_board = ? AND DATE_FORMAT(o_datetime, '%Y-%m-%d') = ?",
    data,
    callback
  );

statisticModel.countOrdersPerEmployee = (data, callback) =>
  connection.query(
    "SELECT COUNT(*) AS nOrdersPerEmployee FROM torder WHERE id_employee = ? AND DATE_FORMAT(o_datetime, '%Y-%m-%d') = ?",
    data,
    callback
  );

statisticModel.countSalesPerDate = (data, callback) =>
  connection.query(
    "SELECT COUNT(*) AS nSalesPerDate FROM payment WHERE DATE_FORMAT(p_datetime, '%Y-%m-%d') = ?",
    data,
    callback
  );

statisticModel.allTables = (data, callback) =>
  connection.query(
    "SELECT id_board, b_tag FROM board ORDER BY id_board",
    data,
    callback
  );

statisticModel.allEmployees = (data, callback) =>
  connection.query(
    "SELECT id_employee, e_name FROM employee ORDER BY e_name",
    data,
    callback
  );

module.exports = statisticModel;
