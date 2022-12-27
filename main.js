


let statevalue;

let country = document.getElementById("country");

let victims = document.getElementById("victims");

let dead = document.getElementById("dead");

let recovered = document.getElementById("recovered");

let active =  document.getElementById("active");

let a;





function getData(url){

  
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      
      console.log(data)
      
      console.log(data[0].new_active)
      
      
      for (var i = 1; i<data.length; i++) {
        
        var node = document.createElement('option');
           
           
        node.setAttribute("value", i);
        
       
        
        var textnode = document.createTextNode(data[i].state_name);
      
       node.appendChild(textnode);
      
      document.getElementById("statelist").appendChild(node);
      
      }
        
      country.innerText = data[0].length;

      victims.innerText = data[0].new_active;
        
      dead.innerText = data[0];
      
      recovered.innerText = data[0].recovered;
        
        
      a = data;
      
    })
}

function getstate(){
      
    statevalue = document.getElementById("statelist").value ;
      
      
      country.innerText = a[statevalue].state_name;
      
      victims.innerHTML = a[statevalue].new_positive;

      active.innerHTML = a[statevalue].new_active;
      
      dead.innerText = a[statevalue].new_death;
      
      
    recovered.innerText = a[statevalue].new_cured;
      
      
      
      console.log(a[statevalue]);
      
      
}
const proxy = "https://www.mohfw.gov.in/data/datanew.json";

getData(proxy)


