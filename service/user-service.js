import * as userRepository from '../persistency/user-repository.js'



export async function createUser(pMember){
    return await userRepository.create(pMember);
}

export async function deleteUser(pId){
    return await userRepository.remove(pId);
}

export async function getAllUser(){
    return await userRepository.getAll();
}

export async function getUserById(pId){
    return await userRepository.findById(pId);
}
export async function getUserByEmail(pEmail){
    return await userRepository.findByEmail(pEmail);
}
export async function updateUser(pId, pUpdateEntity){
    return await userRepository.update(pId, pUpdateEntity);
}


