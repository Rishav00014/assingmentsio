const axios =require('axios');
const express =require('express')
const cheerio=require('cheerio');

const url ="https://internshala.com/";

const PORT = 4000;
var details =[];

const app=express()

app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home",{details:details});
})
app.post("/",async(req,res)=>{
    var data= req.body.require;
    details=[];
    if(data.includes("internship")||data.includes("internships")){
        if(data.includes("full stack")){
            await getInternship(url +"internships/full-stack-development-internship/");
        }else if(data.includes("front end development")||data.includes("front end")){
            await getInternship(url +"internships/front-end-development-internship/");
        }
        else{
            await getInternship(url+"internships/");
        }
        
    } 
    else if (data.includes("job")||data.includes("jobs")){
        await getInternship(url+"jobs/")
    }
    res.redirect("/")
})
app.listen(PORT,()=>{
    console.log(`Server is active at ${PORT}`)
})

//".company .view_detail_button" compny name with location 0 name 1 location

async function getInternship(link){
    try{
        const response = await axios.get(link,{
            header:{
                "User-Agent":"custom-user-agent string"
            }
        });
        const $ =cheerio.load(response.data);
        const genrs =$("#internship_list_container .internship_meta");
        genrs.each(function(){
            const obj ={
                type:link.includes("jobs/")?"job":"internship",
                role:$(this).find(".company .profile a").text(),
                link : url.substring(0,url.length-1)+ $(this).find(".company .profile a").attr('href'),
                company : $(this).find(".company .company_name a").text().trim(),
                CTC : $(this).find(".internship_other_details_container .other_detail_item .item_body:last").text().trim()
            }
            details.push(obj);
        })
        console.log(details);
        var pNo= parseInt($("#pageNumber").text());
        var lPNo =parseInt($("#total_pages").text())

    }catch(error){
        console.error(error);
    }
}
