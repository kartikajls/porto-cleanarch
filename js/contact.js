import { Header } from "./component/header.js";
import { Contact } from "./component/contact/contact.js";
import { Footer } from "./component/footer.js";



document.querySelector("#header").innerHTML = Header();
document.querySelector("#contact").innerHTML = Contact();
document.querySelector("#footer").innerHTML = Footer(); 
