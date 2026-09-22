import { Header } from "./component/header.js";
import { Content_1 } from "./component/data-analyst/content1.js";
import { Content_2 } from "./component/data-analyst/content2.js";
import { Content_3 } from "./component/data-analyst/content3.js";

import { Footer } from "./component/footer.js";


import { ReadMore } from "./component/readmore.js";



document.querySelector("#header").innerHTML = Header();
document.querySelector("#content_1").innerHTML = Content_1();
document.querySelector("#content_2").innerHTML = Content_2();
document.querySelector("#content_3").innerHTML = Content_3();

document.querySelector("#footer").innerHTML = Footer();



ReadMore();
