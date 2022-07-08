export default (sequelize, Sequelize) => {
  return sequelize.define("income", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    explanation: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    }
  });
};
