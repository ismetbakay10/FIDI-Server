import Sequelize from "sequelize";
//import dbConfig from "../environment-config.json";

import UserModel from "./user-model.js"
import IncomeModel from "./income-model.js"
import ExpensesModel from "./expenses-model.js"

const sequelize = new Sequelize("fidi", "root", "159753.iB", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);
db.income = IncomeModel(sequelize, Sequelize);
db.expenses = ExpensesModel(sequelize, Sequelize);

db.users.hasMany(db.income);
db.income.belongsTo(db.users);

db.users.hasMany(db.expenses);
db.expenses.belongsTo(db.users);












// db.familyMember.hasMany(db.agenda);
// db.agenda.belongsTo(db.familyMember);

// db.family.hasMany(db.agenda);
// db.agenda.belongsTo(db.family);

// db.familyMember.belongsToMany(db.punishment, {
//   through: "familyMember_punishment",
//   as: "familyMembers",
//   foreignKey: "familyMember_id",
// });

// db.punishment.belongsToMany(db.familyMember, {
//   through: "familyMember_punishment",
//   as: "punishments",
//   foreignKey: "punishment_id",
// });

// db.familyMember.belongsToMany(db.rewards, {
//   through: "familyMember_rewards",
//   as: "familyMember",
//   foreignKey: "familyMember_id",
// });

// db.rewards.belongsToMany(db.familyMember, {
//   through: "familyMember_rewards",
//   as: "reward",
//   foreignKey: "rewards_id",
// });

// use it to force to create the db from scratch
// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

export default db;
