'use strict';

let display=document.querySelector('.display');
let uppercase=document.querySelector('#UpperCase');
let lowercase=document.querySelector('#LowerCase');
let numbers=document.querySelector('#Numbers');
let sym=document.querySelector('#Symbols');
let btn=document.querySelector('.btn')
let length=document.querySelector('.labeldis')
let copy=document.querySelector('.copy')

let getlowercase=() =>String.fromCharCode(Math.floor(Math.random() * 26)+ 97)
let getuppercase=()=>String.fromCharCode(Math.floor(Math.random() * 26)+65)
let getnumber=()=>String.fromCharCode(Math.floor(Math.random()*10)+48)
let getsymbole=()=>String.fromCharCode(Math.floor(Math.random()*5)+60)

const random={
    lower:getlowercase,
    upper:getuppercase,
    number:getnumber,
    symbol:getsymbole,
}


btn.addEventListener('click',() => {
    let len= +length.value

    // console.log(len)

    let uppercheck=uppercase.checked;
    let lowercheck=lowercase.checked;
    let numcheck=numbers.checked;
    let symcheck=sym.checked;
    

    display.innerText = generatepassword(uppercheck,lowercheck,numcheck,symcheck,len)
    // console.log(uppercheck,lowercheck,numcheck,symcheck)
})

function generatepassword(lower,upper,number,symbol,len){
    let generatepassword='';
    let typescount=lower+upper+number+symbol;
    console.log(typescount)

    let arr=[{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    console.log(arr)

    
    if(typescount === 0){
        return '';
    }
    console.log(len)
    for(let i=0;i < len;i += typescount)
    {
       arr.forEach(types => {
           const funcname=Object.keys(types)[0]
           console.log(funcname)
           generatepassword += random[funcname]()
       })
    }

    let finalpassword=generatepassword.slice(0,len)
    return finalpassword
}

copy.addEventListener('click',()=>{
    // let textarea=document.createElement('textarea');
    // let password=display.innerText
    // textarea.value=password;
    // document.body.appendChild(textarea)
    // textarea.select()
    // document.execCommand('copy')

    let textarea=document.createElement('textarea');
    textarea.value=display.innerText
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
})


