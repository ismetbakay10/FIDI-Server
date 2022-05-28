import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.basicInfo.findAll(); 
}

export async function findById(pId){
  return await db.basicInfo.findByPk(pId);
}

export async function create(pEntity){
  return await db.basicInfo.create(pEntity);
}

export async function remove(pId){
  return await db.basicInfo.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.basicInfo.update(pUpdatedEntity, {
    where: { id: pId }
  });
}




