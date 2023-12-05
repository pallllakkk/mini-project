const express=require('express');
const router=express.Router();

router.get('/Dictionary',(req,res)=>{
    res.render('./Dictionary/index');
});
router.get('/TextAnalyzer',(req,res)=>{
    res.render('./Text Analyzer/index');
});
router.get('/texttospeech',(req,res)=>{
    res.render('./text to speech/index');
});
router.get('/TypingSpeedTestWebsite',(req,res)=>{
    res.render('./Typing Speed Test Website/index');
});
router.get('/Typingchamp',(req,res)=>{
    res.render('./Typing-champ/index');
});
router.get('/WhiteBoard',(req,res)=>{
    res.render('./White-Board/index');
});
module.exports=router;