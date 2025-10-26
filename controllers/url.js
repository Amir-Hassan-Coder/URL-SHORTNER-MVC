import { userUrl } from "../models/Url.js"
import shortid from "shortid"
export const shortUrl = async (req,res)=>{
 const longUrl = req.body.longUrl;
 const shortCode = shortid.generate();

 const shortUrl = `http://localhost:9119/${shortCode}`

 const newUrl = new userUrl({shortCode,longUrl})

 await newUrl.save();


 console.log("short url are saved");
 res.render("index.ejs",{ shortUrl })
 
}

export const getOriginalUrl = async (req,res)=>{
    const shortCode = req.params.shortCode

    
    // find on database 
    
    const originalUrl = await userUrl.findOne({shortCode})

    if (originalUrl) {
        res.redirect(originalUrl.longUrl)
    }else{
        res.json({
          msg:" invalid short Code "
        })
    }
}