const createExcersise = require('../../Controllers/excersisesController/createExcersise');

const postExcersise = async (req, res)=>{
    const {name,description,image,series,repetitions} = req.body;

    try {
        const newExcersise= await createExcersise(name,description,image,series,repetitions);
        if(newExcersise){
            res.status(200).json(newExcersise);
        }
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

module.exports=postExcersise;