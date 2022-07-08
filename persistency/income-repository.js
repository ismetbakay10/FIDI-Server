import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.income.findAll(); 
}

export async function findById(pId){
  return await db.income.findByPk(pId);
}

export async function findByEmail(pEmail){
  return await db.income.findOne({
    where: { email: pEmail}
  });
}

export async function create(pEntity){
  return await db.income.create(pEntity);
}

export async function remove(pId){
  return await db.income.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.income.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function findByUserId(pUserId){
  return await db.income.findOne({
    where: { userId: pUserId}
  });
}


// export async function isUserExistingByEmail(pEmail){
// const emailAcount= await db.income.count({
//     where: { email: pEmail}
//   });
//   return emailAcount == 0 ? false :true;
// }


