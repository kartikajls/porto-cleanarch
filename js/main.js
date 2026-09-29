import { Header_main } from "./component/header-main.js";
import { Profile } from "./component/profile.js";
import { About } from "./component/about.js";
import { Project } from "./component/project.js"
import { Education } from "./component/education.js"
import { Footer_main } from "./component/footer-main.js"


document.querySelector("#header_main").innerHTML = Header_main();
document.querySelector("#profile").innerHTML = Profile();
document.querySelector("#about").innerHTML = About();
document.querySelector("#project").innerHTML = Project();
document.querySelector("#education").innerHTML = Education();
document.querySelector("#footer_main").innerHTML = Footer_main();








