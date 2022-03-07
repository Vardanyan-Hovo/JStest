let slayd = 1;
let j = 1;
let i;
let k;

document.querySelector(".btn-next").addEventListener("click",function(){
            if(slayd > 7)
            {
              let  line = document.querySelector("#slayder2").childNodes;
                line[slayd - 8].style.display = "inline-block";
                document.querySelector(".newslayd2").style.display = "block";
                document.querySelector(".newslayd2").style.marginTop = -21 + 'px';
                document.querySelector(".newslayd1").style.display = "none";
            }
            else
            {
              let  line = document.querySelector("#slayder1").childNodes;
                line[slayd].style.display = "inline-block";
                document.querySelector(".newslayd1").style.display = "block";
                document.querySelector(".newslayd2").style.display = "none";
            }
            console.log("     slayd ==  " + slayd);
            slayd += 2;
            if(slayd > 15)
                slayd = 1;
            i = slayd;
             if(i > 7)
                k = slayd - 8;
             else
                k = i;
            j = 1;
            while (j <= 7)
            {
                
                if (i > 15)
                i = 1;
                if (i >= 9)
                {
                    line = document.querySelector("#slayder2").childNodes;
                }
                if (i <= 7)
                {
                    line = document.querySelector("#slayder1").childNodes;
                }
                if (i == 1)
                k = 1;
                if (i == 9)
                k = 1;
                console.log(" i =  " + i + "  j =  " + j + " k =  "  + k);
                line[k].style.display = "none";
                j++;
                k += 2;
                i += 2;
            }
})

document.querySelector(".btn-prev").addEventListener("click",function(){
    if(slayd > 7)
    {
      let  line = document.querySelector("#slayder2").childNodes;
        line[slayd - 8].style.display = "inline-block";
        document.querySelector(".newslayd2").style.display = "block";
        document.querySelector(".newslayd2").style.marginTop = -21 + 'px';
        document.querySelector(".newslayd1").style.display = "none";
    }
    else
    {
      let  line = document.querySelector("#slayder1").childNodes;
        line[slayd].style.display = "inline-block";
        document.querySelector(".newslayd1").style.display = "block";
        document.querySelector(".newslayd2").style.display = "none";
    }
    console.log("     slayd ==  " + slayd);
    slayd -= 2;
    if(slayd < 1)
        slayd = 15;
    i = slayd;
     if(i > 7)
        k = slayd - 8;
     else
        k = i;
    j = 1;
    while (j <= 7)
    {
        
        if (i < 1)
        i = 15;
        if (i >= 9)
        {
            line = document.querySelector("#slayder2").childNodes;
        }
        if (i <= 7)
        {
            line = document.querySelector("#slayder1").childNodes;
        }
        if (i == 15)
        k = 7;
        if (i == 7)
        k = 7;
        console.log(" i =  " + i + "  j =  " + j + " k =  "  + k);
        line[k].style.display = "none";
        j++;
        k -= 2;
        i -= 2;
    }
})