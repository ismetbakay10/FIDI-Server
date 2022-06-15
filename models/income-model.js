export default (sequelize, Sequelize) => {
  return sequelize.define("income", {
    id_income: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    explanation: {
      type: Sequelize.STRING,
    },
    income: {
      type: Sequelize.INTEGER,
    }
  });
};
