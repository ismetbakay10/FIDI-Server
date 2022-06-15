import * as incomeRepository from '../persistency/income-repository.js'


export async function createincome(pMember){
    return await incomeRepository.create(pMember);
}

// export async function checkincome(pIncome){
//     console.log(pIncome.email)
//     const isincomeExisting = await incomeRepository.isincomeExistingByEmail(pIncome.email)
//     if(isincomeExisting){
//         return {
//             allowLogin:true
//         }
//     }
//     else{
//         const income = await incomeRepository.create(pIncome);
//         //EMAIL BURDA OLACAK
//         return {
//             allowLogin:true
//         }
        
//     }
// }

export async function deleteincome(pId){
    return await incomeRepository.remove(pId);
}

export async function getAllincome(){
    return await incomeRepository.getAll();
}

export async function getincomeById(pId){
    return await incomeRepository.findById(pId);
}
// export async function getincomeByEmail(pEmail){
//     return await incomeRepository.findByEmail(pEmail);
// }
export async function updateincome(pId, pUpdateEntity){
    return await incomeRepository.update(pId, pUpdateEntity);
}





