const statisticModel = require("../models/statistic_model.js");
const statisticControl = () => {};

statisticControl.todayProfit = (request, result) =>
  statisticModel.todayProfit([request.params.date], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

statisticControl.monthProfits = (request, result) =>
  statisticModel.monthProfits([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

statisticControl.allOrdersPerDate = (request, result) =>
  statisticModel.allOrdersPerDate([request.params.o_datetime], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

statisticControl.allOrdersPerTable = (request, result) =>
  statisticModel.allOrdersPerTable(
    [request.params.id_board, request.params.date],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );

statisticControl.allOrdersPerEmployee = (request, result) =>
  statisticModel.allOrdersPerEmployee(
    [request.params.id_employee, request.params.date],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );

statisticControl.countOrdersPerTable = (request, result) =>
  statisticModel.countOrdersPerTable(
    [request.params.id_board, request.params.date],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );

statisticControl.countOrdersPerEmployee = (request, result) =>
  statisticModel.countOrdersPerEmployee(
    [request.params.id_employee, request.params.date],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );

statisticControl.countSalesPerDate = (request, result) =>
  statisticModel.countSalesPerDate([request.params.date], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

statisticControl.allTables = (request, result) =>
  statisticModel.allTables([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

statisticControl.allEmployees = (request, result) =>
  statisticModel.allEmployees([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

module.exports = statisticControl;
