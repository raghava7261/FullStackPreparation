let inc=0

let p=document.getElementById("new")
function increment()
    {

        inc+=1
        
        p.innerText=inc
        
    }

let save_el= document.getElementById("para")


function save()
{

    save_el.innerText+= inc + "-"
    p.innerText=0
    inc=0
}




