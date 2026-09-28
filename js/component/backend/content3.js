export function Content_3() {
    return `
    
        <section class="content_3">
            <div class="content-main">
                <div class="content-readmore">
                    <h3>E-comerce with Command-Line Interface</h3>
                    <div class="border"></div>
                    
                    <div class="readmore-content">
                        <div>
                            <p class="s-login">Tech Stack :</p>
                        </div>
                        <div class="stack">
                            <p class="p-stack">Go</p>
                            <p class="p-stack">MySQL</p>
                            <p class="p-stack">CLI</p>
                        </div>
                        <p class="s-login">
                            This project focuses on developing a Clothing e-commerce application using Go and 
                            a Command-Line Interface (CLI). The application allows users to interact with the system 
                            directly through the terminal to manage users, orders, products, payment and report. It provides several 
                            features, such as viewing product information, managing stock, creating orders, and checking 
                            order details.
                        </p>

                        <p class="s-login">
                            The application uses a structured database to store and manage e-commerce data. 
                            It connects different entities such as users, products, orders, and reports through 
                            relational database tables. The system also includes CRUD operations for managing product 
                            data and uses SQL queries to retrieve information and generate order reports. This project 
                            helps me understand how backend applications communicate with databases and how data flows 
                            between different parts of an application.
                        </p>

                        <div class="scroll-samping">
                            <img src="../src/asset/backend/e-comerce/01.png" class="pict-da-panjang">
                        </div>

                        <p class="s-login">
                            Through this project, I learn how to develop backend functionality using Go, 
                            implement database operations with a MySQL database, handle user input through a CLI, 
                            and organize application logic into separate components. I also practice using environment 
                            variables for database configuration and applying error handling when processing data. 
                            Overall, this project strengthens my understanding of backend development, MySQL database 
                            management, and the basic workflow of an e-commerce system.
                        </p>

                        <p class="s-login">
                            The application provides different menus for users and administrators based on their roles. 
                            Users can view the available clothing catalog, select products, and complete the checkout process 
                            to purchase clothing items. Users can also access the system report to view relevant information 
                            about their orders.
                        </p>

                        <div class="scroll-samping">
                            <img src="../src/asset/backend/e-comerce/02.png" class="pict-da-normal">
                        </div>
                        
                        <p class="s-login">
                            Administrators have additional privileges to manage the clothing catalog and inventory. 
                            They can add new clothing products, update product information such as stock and price, and 
                            remove products from the catalog. These features allow administrators to maintain accurate 
                            and up-to-date product information.
                        </p>

                        <div class="scroll-samping">
                            <img src="../src/asset/backend/e-comerce/03.png" class="pict-da-normal">
                        </div>

                        <p class="s-login">
                            The system also provides a mandatory reporting menu that allows the application 
                            to display reports related to users, stock, and orders. After completing their activities, 
                            both users and administrators can select the exit menu to safely leave the application.
                        </p>

                        <div class="source">
                            <img src="../src/asset/icon/github.png" class="s-source">
                            <a href="https://github.com/kartikajls/ecomerce"
                                class="s-text">Source</a>
                        </div>
                    </div>

                    <button class="readmore-btn">Read More >> </button>
                </div>

            </div>
        </section>
    `;
}