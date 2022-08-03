const connection = require("./connection.js");
const paymentModel = () => {};

paymentModel.showAllPayments = (data, callback) => {
  connection.query(
    "SELECT id_order, p_subtotal, p_total, p_tip, p_type, DATE_FORMAT(p_datetime, '%d/%m/%Y a las %H:%i') as p_datetime FROM payment",
    [],
    callback
  );
};

paymentModel.showOrdersPerTable = (data, callback) => {
  connection.query(
    "SELECT p.p_name, SUM(so.s_cuantity) AS s_cuantity, (SUM(so.s_cuantity) * p.p_price) AS total FROM suborder so INNER JOIN product p ON p.id_product = so.id_product WHERE so.id_order = ? GROUP BY so.id_product",
    data,
    callback
  );
};

paymentModel.orderSubtotal = (data, callback) => {
  connection.query(
    "SELECT SUM(so.total) AS order_total FROM (SELECT (SUM(s.s_cuantity) * p.p_price) AS total FROM suborder s INNER JOIN product p ON p.id_product = s.id_product WHERE s.id_order = ? GROUP BY s.id_product) so",
    data,
    callback
  );
};

paymentModel.orderTotal = (data, callback) => {
  connection.query(
    "SELECT SUM(so.total) AS order_total FROM (SELECT (SUM(s.s_cuantity) * p.p_price) AS total FROM suborder s INNER JOIN product p ON p.id_product = s.id_product WHERE s.id_order = ? GROUP BY s.id_product) so",
    data,
    callback
  );
};

/* paymentModel.orderTotal = (data, callback) => {
  connection.query(
    "SELECT (SUM(subq.total_neto) + 0.1*SUM(subq.total_neto)) AS total_orden\
	   			FROM (SELECT com.com_nombre, SUM(sub_cant) AS cant_total_comida, (SUM(sub_cant)*com.com_precio) AS total_neto\
			        	FROM suborden sub\
			        	INNER JOIN comida com ON com.com_id = sub_com_id\
			        	WHERE sub.sub_ord_id = ?\
			        	GROUP BY sub.sub_com_id) subq",
    data,
    callback
  );
};
 */
paymentModel.addPayment = (data, callback) => {
  connection.query(
    "INSERT INTO payment(id_order, p_subtotal, p_total, p_tip, p_type) VALUES (?, ?, ?, ?, ?)",
    data,
    callback
  );
};

module.exports = paymentModel;
