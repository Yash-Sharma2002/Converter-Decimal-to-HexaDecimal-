function dechex(){
    let num =document.getElementById("inp-1").value
    let wr = document.getElementById("hidden")

// first converting decimal to binary 
    var ssr=""
    for (let i = 15; i >= 0; i--) {
        let z = Math.pow(2, i)
        
        if (num-z>=0)
        {
            ssr+="1"
        }
        else
        {
            ssr+="0"
        }
        num= num%z;
    }

    // making array of binary 
    let myFunc = ssr => Number(ssr);
    var intArr = Array.from(String(ssr), myFunc);
    console.log(intArr);
    var g=''
    for (let i =0 ; i < intArr.length; i+=4) {
    var sat=0
    let b=0
        for (let j = i+3; j >= i; j--) {
            let zeno = Math.pow(2, b)
            
            if (intArr[j]==1)
            {
                sat+=zeno
            }
            b+=1
        }
        console.log(sat)
        if(sat<10){
            g+=String(sat)
        }
        else if(sat==10){
            g+="A"
        }
        else if(sat==11){
            g+='B'
        }
        else if(sat==12){
            g+='C'
        }
        else if(sat==13){
            g+='D'
        }
        else if(sat==14){
            g+='E'
        }
        else if(sat==15){
            g+='F'
        }
    }
    wr.innerHTML=g+" H"
    console.log(g+" H")
}