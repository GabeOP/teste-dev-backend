const User = require("../models/User");

module.exports = {

  get: async(req, res)=>{
    const find = await User.find()
    res.status(200).json(find)
  },
  getByEmail: async(req, res)=>{
    const email = req.params;

    const emailExists = await User.findOne(email);
    if(!emailExists){
      res.status(404).json({message: "User not found"})
    }

    res.status(200).json(emailExists)
  },
  post: async(req, res)=>{
    const {name, email, birth_date, sex, health_problems, updated} = req.body;
    
    if(!name|| !email|| !birth_date|| !sex|| !updated){
      return res.status(422).json({message: "complete all fields"})
    }

    const emailExists = await User.findOne({email: email})
    if(emailExists){
      return res.status(422).json({message: "e-mail is already registered"})
    }

    const user = new User({name, email, birth_date, sex, health_problems, updated});

    try {
      await user.save();
      res.status(201).json({message: "User created successfully"})
    } catch (error) {
      
    }
  },
  patch: async(req, res)=>{
    const id = req.params;
    const {name, email, birth_date, sex, health_problems, updated} = req.body;
    
    const emailExists = await User.findOne({email: email})
    if(emailExists){
      return res.status(422).json({message: "e-mail is already registered"})
    }
    
    await User.findByIdAndUpdate(id, {name, email, birth_date, sex, health_problems, updated})
    res.status(200).json({message: "editado"})
  }
}