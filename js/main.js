import { Header } from "./component/header.js";
import { Profile } from "./component/profile.js";
import { About } from "./component/about.js";
import { Project } from "./component/project.js"
import { Education } from "./component/education.js"
import { Experience } from "./component/experience.js"
import { Certification } from "./component/certification.js"
import { Footer } from "./component/footer.js"


document.querySelector("#header").innerHTML = Header();
document.querySelector("#profile").innerHTML = Profile();
document.querySelector("#about").innerHTML = About();
document.querySelector("#project").innerHTML = Project();
document.querySelector("#education").innerHTML = Education();
document.querySelector("#experience").innerHTML = Experience();
document.querySelector("#certification").innerHTML = Certification();
document.querySelector("#footer").innerHTML = Footer();








