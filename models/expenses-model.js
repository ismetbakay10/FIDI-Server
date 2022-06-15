export default (sequelize, Sequelize) => {
  return sequelize.define("expenses", {
    id_expenses: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    explanation: {
      type: Sequelize.STRING,
    },
    expenses: {
      type: Sequelize.INTEGER,
    }
  });
};
