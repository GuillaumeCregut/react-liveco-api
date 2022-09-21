const router=require('express').Router();
const piratesRouter=require('./pirates.routes');
router.use('/pirates',piratesRouter);

router.get('/',(req,res)=>{
    res.send('Please read README file');
})
module.exports=router;