module.exports = (app) => {
    const sql=require("../config/queries.js");
  
    var router= require("express").Router();
  
    // Create
    router.post("/createMemo",sql.insertMemo)
    app.use("/", router);
  };
