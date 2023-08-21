function handleClickBtn(target){
const itemName = target.parentNode.childNodes[0].innerText;
const li = document.createElement('li');
li.innerText = itemName;
console.log(li)
}