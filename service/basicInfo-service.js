import * as basicInfoRepository from '../persistency/basicInfo-repository.js'
import config from '../environment-config.json';


export async function createBasicInfo(pMember){
    return await basicInfoRepository.create(pMember);
}

export async function deleteBasicInfo(pId){
    return await basicInfoRepository.remove(pId);
}

export async function getAllBasicInfo(){
    return await basicInfoRepository.getAll();
}

export async function getBasicInfoByUserId(pUserId){
    return await basicInfoRepository.findByUserId(pUserId);
}

export async function updateBasicInfo(pId, pUpdateEntity){
    return await basicInfoRepository.update(pId, pUpdateEntity);
}


