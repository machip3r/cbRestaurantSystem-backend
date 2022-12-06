const connection = require("./connection.js");
const tableModel = () => {};

tableModel.addTable = (data, callback) =>
  connection.query("INSERT INTO board(b_tag) VALUES (?)", data, callback);

tableModel.updateTable = (data, callback) =>
  connection.query(
    "UPDATE board SET b_tag = ? WHERE id_board = ?",
    data,
    callback
  );

tableModel.deleteTable = (data, callback) =>
  connection.query("DELETE FROM board WHERE id_board = ?", data, callback);

tableModel.allTables = (data, callback) =>
  connection.query(
    "SELECT id_board, b_tag, b_disponibility FROM board",
    data,
    callback
  );

tableModel.allActiveTables = (data, callback) =>
  connection.query(
    "SELECT t.id_board, t.b_tag FROM board t INNER JOIN torder o ON (o.o_status ='a' OR o.o_status = 'w') WHERE t.id_board = o.id_board",
    data,
    callback
  );

/* tableModel.filledSpacesTables = (data, callback) =>
  connection.query(
    "SELECT t.id_board, COUNT(DISTINCT s.sub_asiento) AS cupo " +
      "FROM mesa AS m " +
      "LEFT JOIN (SELECT s.sub_ord_id, o.ord_mes_id, s.sub_id " +
      "FROM suborden AS s, orden  AS o " +
      "WHERE s.sub_ord_id = o.ord_id " +
      "AND o.ord_estado = 'a') AS r " +
      "ON t.id_board = r.ord_mes_id " +
      "LEFT JOIN suborden AS s " +
      "ON s.sub_ord_id = r.sub_ord_id AND s.sub_id = r.sub_id GROUP BY t.id_board ORDER BY t.id_board ASC",
    data,
    callback
  ); */

tableModel.allSuborders = (data, callback) =>
  connection.query(
    "SELECT so.id_suborder, so.s_tag, p.p_name, so.s_cuantity, (p.p_price * so.s_cuantity) AS s_price FROM suborder so INNER JOIN product p ON(so.id_product = p.id_product) INNER JOIN torder o ON(o.id_order = so.id_order) INNER JOIN board t ON(t.id_board = o.id_board) WHERE t.id_board = ? AND o.id_order = ? ORDER BY so.s_tag",
    data,
    callback
  );

tableModel.orderTable = (data, callback) =>
  connection.query(
    "SELECT t.b_tag, o.id_order FROM board t LEFT JOIN torder o ON (o.o_status ='a' OR o.o_status ='w') AND t.id_board = o.id_board ORDER BY t.id_board ASC",
    data,
    callback
  );

tableModel.getTableOrder = (data, callback) =>
  connection.query(
    "SELECT id_order FROM torder WHERE id_board = ? AND (o_status ='a' OR o_status ='w')",
    data,
    callback
  );

tableModel.getTableTag = (data, callback) =>
  connection.query(
    "SELECT b_tag FROM board WHERE id_board = ?",
    data,
    callback
  );

tableModel.addSuborder = (data, callback) =>
  connection.query(
    "INSERT INTO suborder(id_order, id_product, s_tag, s_cuantity) VALUES (?, ?, ?, ?)",
    data,
    callback
  );

tableModel.deleteSuborder = (data, callback) =>
  connection.query(
    "DELETE FROM suborder WHERE id_suborder = ?",
    data,
    callback
  );

module.exports = tableModel;
