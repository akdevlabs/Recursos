import {recurso1} from './baseDatosRec.js'
import {recurso2} from './baseDatosRec.js'
import {recurso3} from './baseDatosRec.js'

//------------------ Render ----------------------//
let rOne = recurso1
let rTwo = recurso2
let rThree = recurso3



let courseLevel = 2


function selectCourse() {
 
  if (courseLevel === 0){
    let blockOne = rOne 
    return blockOne
 
  }else if (courseLevel === 1){
    let blockTwo = rTwo
    return blockTwo

  }else{
    let blockThree = rThree 
    return blockThree}
}

function one(){
   let course =  selectCourse()
   return course.imgOne 
}

function oneWeb(){
  let course =  selectCourse()
  return course.weblinkOne
}

function two(){
    let course =  selectCourse()
    return course.imgTwo 
}

function twoWeb(){
  let course =  selectCourse()
  return course.weblinkTwo
}

function three(){
  let course =  selectCourse()
  return course.imgThree
}

function threeWeb(){
  let course = selectCourse()
  return (course.weblinkThree)
}

function Four(){
  let course =  selectCourse()
  return course.imgFour
}

function fourWeb(){
  let course = selectCourse()
  return (course.weblinkFour)
}

function five(){
  let course =  selectCourse()
  return course.imgFive
}


function fiveWeb(){
  let course = selectCourse()
  return (course.weblinkFive)
}

function six(){
  let course =  selectCourse()
  return course.imgSix
}


function sixWeb(){
  let course = selectCourse()
  return (course.weblinkSix)
}

function seven(){
  let course =  selectCourse()
  return course.imgSeven
}


function sevenWeb(){
  let course = selectCourse()
  return (course.weblinkSeven)
}

function eight(){
  let course =  selectCourse()
  return course.imgEight
}


function eightWeb(){
  let course = selectCourse()
  return (course.weblinkEight)
}

function nine(){
  let course =  selectCourse()
  return course.imgNine
}


function nineWeb(){
  let course = selectCourse()
  return (course.weblinkNine)
}

function ten(){
  let course =  selectCourse()
  return course.imgTen
}


function tenWeb(){
  let course = selectCourse()
  return (course.weblinkTen)
}






function cWebone(){
const link = document.getElementById("link")
  link.href = oneWeb() 
  return(link.href)
}
cWebone()

function cWebtwo(){
const link = document.getElementById("link1")
  link.href = twoWeb()
  return(link.href)
}
cWebtwo()
 
function cWebthree(){
  const link = document.getElementById("link2")
  link.href = threeWeb()
  return(link.href)
}
cWebthree()
  
function cWebfour(){
  const link = document.getElementById("link3")
  link.href = fourWeb()
  return(link.href)
}
cWebfour()

function cWebfive(){
  const link = document.getElementById("link4")
  link.href = fiveWeb()
  return(link.href)
}
cWebfive()

function cWebsix(){
  const link = document.getElementById("link5")
  link.href = sixWeb()
  return(link.href)
}
cWebsix()

function cWebseven(){
  const link = document.getElementById("link6")
  link.href = sevenWeb()
  return(link.href)
}
cWebseven()

function cWebeight(){
  const link = document.getElementById("link7")
  link.href = eightWeb()
  return(link.href)
}
cWebeight()

function cWebnine(){
  const link = document.getElementById("link8")
  link.href = nineWeb()
  return(link.href)
}
cWebnine()

function cWebten(){
  const link = document.getElementById("link9")
  link.href = tenWeb()
  return(link.href)
}
cWebten()

function oneC(){
const iin = document.getElementById("show")
iin.src = one()
let want = iin.src
return(want)
}
oneC()

function twoC(){
const iin = document.getElementById("show2")
iin.src = two()
let want = iin.src
return(want)
}
twoC()

function threeC(){
const iin = document.getElementById("show3")
iin.src = three()
let want = iin.src
return(want)
}    
threeC()

function fourC(){
const iin = document.getElementById("show4")
iin.src = Four()
let want = iin.src
return(want)
}    
fourC()

function fiveC(){
const iin = document.getElementById("show5")
iin.src = five()
let want = iin.src
return(want)
}    
fiveC()

function sixC(){
const iin = document.getElementById("show6")
iin.src = six()
let want = iin.src
return(want)
}    
sixC()

function sevenC(){
const iin = document.getElementById("show7")
iin.src = seven()
let want = iin.src
return(want)
} 
sevenC()

function eightC(){
const iin = document.getElementById("show8")
iin.src = eight()
let want = iin.src
return(want)
}    
eightC()

function nineC(){
const iin = document.getElementById("show9")
iin.src = nine()
let want = iin.src
return(want)
}    
nineC()

function tenC(){
const iin = document.getElementById("show10")
iin.src = ten()
let want = iin.src
return(want)
}    
tenC()