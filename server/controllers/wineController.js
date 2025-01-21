const Wine = require("../models/wines")

const getAll = async(req,res)=>{
    const wines = await Wine.find();
    try {
        res.status(200).json({
            data:wines,
            message:"get wines"
        })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"get error"
        })
    }
};

const getOne = async(req,res)=>{
    const {id} = req.params;
    const wine = await Wine.findById(id);
    try {
        res.status(200).json({
            data:wine,
            message:"get wine"
        })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"get one error"
        })
    }
};

const deleteOne = async(req,res)=>{
    const {id} = req.params;
    const wine = await Wine.findByIdAndDelete(id);
    try {
        res.status(200).json({
            data:wine,
            message:"delete wine"
        })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"delete one error"
        })
    }
};

const post = async(req,res)=>{
    const {name,oldPrice,newPrice,imageUrl} = req.body;
    const newWine = new Wine({
        name,oldPrice,newPrice,imageUrl
    });
    await newWine.save()
    try {
        res.status(200).json({
            data:newWine,
            message:"post wine"
        })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"post error"
        })
    }
};

module.exports = {getAll,getOne,deleteOne,post}