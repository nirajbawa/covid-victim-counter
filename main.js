


let statevalue;

let country = document.getElementById("country");

let victims = document.getElementById("victims");

let dead = document.getElementById("dead");

let recovered = document.getElementById("recovered");

let active = document.getElementById("active");

let a;

let av = 0 , v=0, d=0, r=0, c;




function getData(url) {


  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {

// console.log(data);
    
    

    for (var i = 0; i < data.length; i++) {

      

    

      var node = document.createElement('option');


      node.setAttribute("value", i);

     

        
      var textnode = document.createTextNode(data[i].state_name);

      node.appendChild(textnode);

      document.getElementById("statelist").appendChild(node);



    }


    v += parseInt(data[36].new_positive);
    av += parseInt(data[36].new_active);
    d += parseInt(data[36].new_death);
    r += parseInt(data[36].new_cured);
    c = data.length;
    

    a = data;

   

    setdefault(c,v,av,d,r);


  })
  .catch((e)=>{
      getData(proxy)
      setTimeout(()=>{
        console.log(proxy);
      }, 10000);
      
  })
}


function setdefault(c,v,av,d,r)
{
  country.innerText = c;

  victims.innerText = v;

  active.innerText = av;

  dead.innerText = d;

  recovered.innerText = r;

}


function getstate() {
  

  statevalue = document.getElementById("statelist").value;

  if(statevalue>=0)
  {

  country.innerText = a[statevalue].state_name;

  victims.innerHTML = a[statevalue].new_positive;

  active.innerHTML = a[statevalue].new_active;

  dead.innerText = a[statevalue].new_death;


  recovered.innerText = a[statevalue].new_cured;

  }

  else{
    setdefault(c,v,av,d,r);
  }


}
const proxy = "https://www.mohfw.gov.in/data/datanew.json";

getData(proxy)


