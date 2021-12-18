const express = require('express');
const router = express.Router();
const Repository = require("../models/Repository")


router.get("/fetchallrepos", async (req, res) => {
    try {    
    const repos = await Repository.find({});
    res.json(repos);
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
}
})


router.post("/addrepos", async (req, res) => {
    try {
    const { name, repoName, description } = req.body;
    const repo = new Repository({ name, repoName, description })
    const savedRepo = await repo.save()
    res.json(savedRepo);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error")
}
})

router.delete('/deleterepo/:id',async(req,res)=>{
    try {
    let repo = await Repository.findById(req.params.id);
    if(!repo){return res.status(404).send("Not Found")}

    repo = await Repository.findByIdAndDelete(req.params.id);
    res.send("repo has been deleted")
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error")
}
})

router.get('/findONe/:id',async(req,res)=>{
    try {
    let repo = await Repository.findById(req.params.id);
    if(!repo){return res.status(404).send("Not Found")}

    repo = await Repository.findById(req.params.id);
    res.json(repo)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error")
}
})

module.exports = router;