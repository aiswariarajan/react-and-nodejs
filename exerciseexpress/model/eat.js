var mongoose=require('mongoose')
var mongoSchema=mongoose.Schema
var friendSchema=new mongoSchema(
{
"title":String,
"about":String,
"image":String,
"link":String
},{collection:'eatwell'}
)
module.exports=mongoose.model("eatwell",friendSchema) 
 