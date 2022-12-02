


let statevalue;

let country = document.getElementById("country");

let victims = document.getElementById("victims");

let dead = document.getElementById("dead");

let recovered = document.getElementById("recovered");

let a;





function getData(url){

  
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      
      console.log(data)
      
      
      
      
      for (var i = 1; i<data.statewise.length; i++) {
        
        var node = document.createElement('option');
           
           
        node.setAttribute("value", i);
        
        
        var textnode = document.createTextNode(data.statewise[i].statecode);
      
       node.appendChild(textnode);
      
      document.getElementById("statelist").appendChild(node);
      
      }
        
      country.innerText = data.statewise.length;
      
      victims.innerText = data.statewise[0].confirmed;
      
      dead.innerText = data.statewise[0].deaths;
      
      recovered.innerText = data.statewise[0].recovered;
        
        
      a = data.statewise;
      
    })
}

function getstate(){
      
    statevalue = document.getElementById("statelist").value ;
      
      
      country.innerText = a[statevalue].state;
      
      victims.innerHTML = a[statevalue].confirmed;
      
      dead.innerText = a[statevalue].deaths;
      
      
    recovered.innerText = a[statevalue].recovered;
      
      
      
      console.log(a[statevalue]);
      
      
}
const proxy = "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json";

getData(proxy)


