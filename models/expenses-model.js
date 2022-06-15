export default (sequelize, Sequelize) => {
  return sequelize.define("expenses", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    explanation: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    }
  });
};
