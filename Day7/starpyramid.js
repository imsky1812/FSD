// Drawing the star pyramid /_\ with only 2 loops 
const r=4;
for(let i=1;i<=r;i++){
    let star="";
    for(let j=1;j<=r*2-1;j++){
        if(j>=r-(i-1) && j<=r+(i-1)){
            star+="*";
        }else{
            star+=" ";
        }
    }
    console.log(star);
}