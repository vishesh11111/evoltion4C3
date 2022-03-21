
const connect = require("./configs/db");
const router = require("./index");

router.listen(5000, async()=>{
    try {
        
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("running 5000>>>>");
})