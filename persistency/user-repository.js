import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.users.findAll(); 
}

export async function findById(pId){
  return await db.users.findByPk(pId);
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


