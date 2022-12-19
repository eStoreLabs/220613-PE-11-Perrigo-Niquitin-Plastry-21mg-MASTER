

    function toggleFirst()
{   
    let one = document.getElementById("es-compare--1");
    let two = document.getElementById("es-compare--2");
    let three = document.getElementById("es-compare--3");

    if (one.style.display == "none") {
      one.style.display = "flex"
      two.style.display = "none"
      three.style.display = "none"
    } else {
      one.style.display = "flex"
    } 
}

function toggleSecond()
{    
    let one = document.getElementById("es-compare--1");
    let two = document.getElementById("es-compare--2");
    let three = document.getElementById("es-compare--3");

  if (two.style.display == "none") {
    two.style.display = "flex"
    one.style.display = "none"
    three.style.display = "none"
  } else {
    two.style.display = "flex"
  } 

  
}

function toggleThird()
{ 
    const esCompareBtns = document.querySelectorAll('.es-compare__button');
let one = document.getElementById("es-compare--1");
let two = document.getElementById("es-compare--2");
let three = document.getElementById("es-compare--3");

  if (three.style.display == "none") {
    three.style.display = "flex"
    two.style.display = "none"
    one.style.display = "none"
  } else {
    three.style.display = "flex"
  } 
}