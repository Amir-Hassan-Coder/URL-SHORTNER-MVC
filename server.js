import express from "express";
import mongoose from "mongoose";
import { shortUrl , getOriginalUrl } from "./controllers/url.js";
const app = express();
const port = 9119;
app.use(express.urlencoded({ extended: true }));

const mongodb_url = mongoose
  .connect(
    "mongodb+srv://decom41405_db_user:WyamT2ucnLH18BRx@cluster0.aib7zf9.mongodb.net/",
    {
      dbName: "url_shortner_project_db",
    }
  )
  .then(() => {
    console.log("database connected successfully 😉");
  })
  .catch((error) => {
    console.log("database connection error ✂️ ", error);
  });

app.get('/',(req,res)=>{
    res.render("index.ejs" , {shortUrl:null})
})

app.post('/short',shortUrl);

app.get("/:shortCode" , getOriginalUrl)
app.listen(port, () => {
  console.log(`our server is running on this port ${port}`);
});

// pass = > WyamT2ucnLH18BRx
// decom41405_db_user

// conection = mongodb+srv://decom41405_db_user:WyamT2ucnLH18BRx@cluster0.aib7zf9.mongodb.net/
//    mongodb+srv://decom41405_db_user:WyamT2ucnLH18BRx@cluster0.aib7zf9.mongodb.net/
