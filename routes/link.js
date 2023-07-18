const router = require('express').Router();
// const { v4: uuidv4 } = require('uuid');
const Link = require("../models/linkSchema");
// const {nanoid} = require("nanoid");
const short = require('short-uuid');

router.post('/', async(req, res) => {
  const { url } = req.body;
  const uuid = short.generate();
  const newUrl = await Link.create({
    redirectUrl:url,
    uuid,
    systemUrl:`${process.env.BASE_URL}/${uuid}`,
  });
  return res.json(newUrl);
});

router.get("/:uuid",async(req,res)=>{
  const uuid = req.params.uuid;
  
  const isUrl = await Link.findOneAndUpdate({ uuid });
  if(isUrl){
    isUrl.clicks += 1;
    isUrl.save();
    return res.redirect(isUrl.redirectUrl);
  }
 
  return res.json({"message":"link not found"});
})

 
module.exports = router;