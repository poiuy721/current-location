const Pool=require('pg').Pool
const pool= new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: '1234',
    port: 5432,
})

const insertMemo=(req,res)=>{
    console.log(req.body);
    let {lat, lon,memo}=req.body
    lon=parseFloat(lon);
    lat=parseFloat(lat);
    let geom='POINT('+lon+' '+lat+')';
    pool.query("INSERT into currunt_location (lon,lat,geom,memo) VALUES ($1,$2,st_geomfromtext($3, 4326),$4)",[lon,lat,geom,memo],(error,results)=>{
        if(error){
            throw error
        }
        res.status(201).send(`memo created`)
    });
}

module.exports={
    insertMemo
}