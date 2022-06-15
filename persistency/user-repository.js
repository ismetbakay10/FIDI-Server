import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.users.findAll(); 
}

export async function findById(pId){
  return await db.users.findByPk(pId);
}

export async function findByEmail(pEmail){
  return await db.users.findOne({
    where: { email: pEmail}
  });
}

export async function create(pEntity){
  return await db.users.create(pEntity);
}

export async function remove(pId){
  return await db.users.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.users.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function findByUserId(pUserId){
  return await db.users.findOne({
    where: { userId: pUserId}
  });
}


export async function isUserExistingByEmail(pEmail){
const emailAcount= await db.users.count({
    where: { email: pEmail}
  });
  return emailAcount == 0 ? false :true;
}


