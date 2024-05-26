let text = document.getElementsByClassName("deom")[0]
text.style.color = '#2C81B7';

let prog = document.getElementById("prog")
prog.setAttribute("class", "prog");
prog.style.backgroundColor = 'grean'
prog.style.color = 'back';


document.getElementsByTagName(imge)[0].setAttrubit('src')


let list = document.querySelector("ul")
let item = '<li>Home</li>'

item.style.border = "1px sold"
list.insertAdjacentHTML("afterbegin", item);


// for (let index = 0; index <= 3; index++) {
//     let item = document.createElement("li")
//     item.innerText = 'item' + index;
//     list.appendChild(item)
// }
// console.log(list)


// item.innerText('home')
// let lis = document.createElement('li')
// let mun = document.createTextNode('Home')
// lis.appendChild(mun)

// let list = document.querySelector('ul');
// list.appendChild(lis)
// list.insertAdjacentHTML("afterbegin",

//     '<li>Home</li>,<li>page</li>,<li>Contact</li>');

// for (let i = 0; i <= list.length; i++) {
//     list[i].style.color = 'bule'
// }





// ul[0].style.backgroundColor = "red";

// const ul = document.querySelector('ul');

// for (let i = 1; i <= 3; i++) {
//     const li = document.createElement('ul');
//     li.textContent = `عنصر ${i}`;
//     ul.appendChild(li);
// }



// document.getElementsByClassName("list").innerHTML;

// let name = document.getElementsByTagName("p")[2];
// console.log(name)


// document.querySelector('p')
// document.querySelectorAll('p')