var div=document.createElement("div");
div.style.textAlign="left";
div.addEventListener("mouseover",()=>
    div.style.color="red")


var fn=createlable("label","for","first","Firstname :")
var br1=linebreak("br")
var infn=createinput("input","type","first","id","first")
var br2=linebreak("br")
var br13=linebreak("br")

var ln=createlable("label","for","last","Lastname :")
var br3=linebreak("br")
var inln=createinput("input","type","last","id","last")
var br4=linebreak("br")
var br14=linebreak("br")

var address=createlable("label","for","address","Address Link 1 :")
var br5=linebreak("br")
var inpadd=createinput("input","type","address","id","Address")
var br6=linebreak("br")
var br15=linebreak("br")

var addr=createlable("label","for","address","Address Link 2 :")
var br7=linebreak("br")
var addr2=createinput("input","type","address","id","address")
var br8=linebreak("br")
var br16=linebreak("br")

var pin=createlable("label","for","first","PIN :")
var br9=linebreak("br")
var inpin=createinput("input","type","pin","id","pin")
var br10=linebreak("br")
var br17=linebreak("br")

var gen=createlable("label","for","first","Gender : ")
var br11=linebreak("br")


var inmale=createinput("input","type","checkbox","id","male")
var male=createlable("label","for","first","male")
var infemale=createinput("input","type","checkbox","id","female")
var female=createlable("label","for","first","female")
var br12=linebreak("br")
var br21=linebreak("br")

var choice=createlable("label","for","first","Choie of Food :")
var br19=linebreak("br")
var br20=linebreak("br")

var nor=createinput("input","type","checkbox","id","nor")
var innor=createlable("label","for","first","North Indian")
var br22=linebreak("br")
var sou=createinput("input","type","checkbox","id","sou")
var insou=createlable("label","for","first","South Indian")
var br23=linebreak("br")
var chi=createinput("input","type","checkbox","id","chi")
var inchi=createlable("label","for","first","chinese")
var br24=linebreak("br")
var jap=createinput("input","type","checkbox","id","jap")
var injap=createlable("label","for","first","Japanese")
var br25=linebreak("br")
var sea=createinput("input","type","checkbox","id","sea")
var insea=createlable("label","for","first","Sea Food")
var br26=linebreak("br")
var br27=linebreak("br")

var sta=createlable("label","for","first","State : ")
var br28=linebreak("br")
var insta=createinput("input","type","first","id","state")
var br29=linebreak("br")
var br30=linebreak("br")

var cou=createlable("label","for","first","Country : ")
var br31=linebreak("br")
var incou=createinput("input","type","first","id","cou")
var br32=linebreak("br")
var br33=linebreak("br")

var button=document.createElement("button");
    button.setAttribute("type","button");
    button.innerHTML="SUBMIT";
    button.addEventListener("click",foo);



div.append(fn,br1,infn,br2,br13,ln,br3,inln,br4,br14,address,br5,inpadd,br6,br15,addr,br7,addr2,br8,br16,
    pin,br9,inpin,br10,br17,gen,br11,inmale,male,infemale,female,br12,br21,choice,br19,br20,nor,innor,br22,sou,insou,br23,
    chi,inchi,br24,jap,injap,br25,sea,insea,br26,br27,sta,br28,insta,br29,br30,cou,br31,incou,br32,br33,button);
document.body.append(div);




function createlable(tagname,atrrname,atrrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(atrrname,atrrvalue);
    ele.innerHTML=content;
    return ele
}
function createinput(tagname1,atrrname2,atrrvalue2,atrrname1,atrrvalue1){
    var ele1=document.createElement(tagname1);
    ele1.setAttribute(atrrname2,atrrvalue2);
    ele1.setAttribute(atrrname1,atrrvalue1);
   return ele1
}
function linebreak(breaker){
    var ele2=document.createElement(breaker);
    return ele2
}

function foo(){
    // var data=document.getElementById("value")
    //    for(var i=0;i<=value;i++){
    //     console.log(data);
    //    }
    let result=confirm(document.querySelectorAll("data"))
    console.log(result);
}