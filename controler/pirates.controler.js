const PiratesModel=require('../models/pirates.model');

const PirateGetAll =()=>{
    
    return PiratesModel.GetAll();
}

const PirateGetOne=(id)=>{
    return PiratesModel.GetOneById(id);
}

module.exports={
PirateGetAll,
PirateGetOne,
};