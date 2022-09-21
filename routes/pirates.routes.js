const router=require('express').Router();
const PirateControler=require('../controler/pirates.controler');


router.get('/',(req,res)=>{
    const pirateList=PirateControler.PirateGetAll();
    res.status(200).json(pirateList);
});

router.get('/:id',(req,res)=>{
    const onePirate=PirateControler.PirateGetOne(req.params.id);
    res.status(200).json(onePirate);
})
module.exports=router;