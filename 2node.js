let studentname = prompt("enter the name")
let company = prompt("enter the  company name")
let pack = prompt("enter the package")
let main = prompt("enter the domain")
let date = prompt("enter the joining date")
let pro = {
  name:studentname,
  company:company,
  package:pack,
  domain:main,
 joiningdate:date
 }
 alert(`${pro.name} got placed in ${pro.company} company as a ${pro.domain} with packages of ${pro.package} joining is on ${pro.joiningdate}`)
