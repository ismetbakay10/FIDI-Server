import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.expenses.findAll(); 
}

export async function findById(pId){
  return await db.expenses.findByPk(pId);
}

export async function findByEmail(pEmail){
  return await db.expenses.findOne({
    where: { email: pEmail}
  });
}

export async function create(pEntity){
  return await db.expenses.create(pEntity);
}

export async function remove(pId){
  return await db.expenses.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.expenses.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function findByUserId(pUserId){
  return await db.expenses.findOne({
    where: { userId: pUserId}
  });
}


export async function isUserExistingByEmail(pEmail){
const emailAcount= await db.expenses.count({
    where: { email: pEmail}
  });
  return emailAcount == 0 ? false :true;
}


