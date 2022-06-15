import * as expensesRepository from '../persistency/expenses-repository.js'


export async function createexpenses(pMember){
    return await expensesRepository.create(pMember);
}

// export async function checkexpenses(pExpenses){
//     console.log(pExpenses.email)
//     const isexpensesExisting = await expensesRepository.isexpensesExistingByEmail(pExpenses.email)
//     if(isexpensesExisting){
//         return {
//             allowLogin:true
//         }
//     }
//     else{
//         const expenses = await expensesRepository.create(pExpenses);
//         //EMAIL BURDA OLACAK
//         return {
//             allowLogin:true
//         }
        
//     }
// }

export async function deleteexpenses(pId){
    return await expensesRepository.remove(pId);
}

export async function getAllexpenses(){
    return await expensesRepository.getAll();
}

export async function getexpensesById(pId){
    return await expensesRepository.findById(pId);
}
// export async function getexpensesByEmail(pEmail){
//     return await expensesRepository.findByEmail(pEmail);
// }
export async function updateexpenses(pId, pUpdateEntity){
    return await expensesRepository.update(pId, pUpdateEntity);
}





