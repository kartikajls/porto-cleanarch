export function Content_2() {
    return `
    
        <section class="content_2">
            <div class="content-main">
                <div class="content-readmore">
                
                    <h3>Rental Camera</h3>
                    <div class="border"></div>
                    <div class="readmore-content">

                        <div>
                            <p class="s-login">Tech Stack :</p>
                        </div>

                        <div class="stack">
                            <p class="p-stack">Go</p>
                            <p class="p-stack">PostgreSQL</p>
                            <p class="p-stack">Echo</p>
                            <p class="p-stack">RESTful API</p>
                            <p class="p-stack">Swagger</p>
                            <p class="p-stack">Bcrypt</p>
                            <p class="p-stack">Gorm</p>
                            <p class="p-stack">WhatsApp Gateway API</p>
                        </div>

                        <p class="s-login">
                            The Rental Camera system provides a platform for users to rent cameras based on their needs. 
                            The main entities in the system are User, Camera, Rental Order, Rental Order Detail, Payment, 
                            and Top Up. The User entity stores information about registered users, while the Camera entity 
                            manages available camera data such as camera name, type, price, and stock. The Rental Order 
                            records each rental transaction, while Rental Order Detail stores the specific cameras 
                            included in each order.
                        </p>

                        <p class="s-login">
                            The system allows users to add balance to their accounts through the Top Up feature. 
                            Users can choose the amount they want to add and make the payment through a bank transfer. 
                            The Payment entity records the payment information and connects the payment process with the 
                            user's top-up or rental transaction. After the payment is successfully processed, the user's 
                            account balance is updated and can be used to complete camera rental transactions.
                        </p>

                        <div class="scroll-samping">
                            <img src="../src/asset/backend/rental-camera/ERD.png" class="pict-da-panjang">
                        </div>

                        <p class="s-login">
                            When users want to rent a camera, they select the available camera and create a Rental Order.
                            The Rental Order Detail records information about each rented camera, including the selected 
                            camera, rental quantity, rental duration, and rental price. The system uses the user's 
                            available balance to process the transaction, allowing the rental payment to be completed 
                            through the user's account balance. This process connects the User, Camera, Rental Order, 
                            Rental Order Detail, and Payment entities into one rental workflow.
                        </p>

                        <p class="s-login">
                            After a top-up or rental transaction is successfully completed, 
                            the system sends a WhatsApp notification to the user as a transaction confirmation. 
                            The notification provides information about the successful top-up or rental, such as the transaction status, 
                            amount, and rental details. This notification gives users a digital record of their transactions and helps 
                            them confirm that their balance top-up or camera rental has been processed successfully.
                        
                        </p>

                        <div class="source">
                            <img src="../src/asset/icon/github.png" class="s-source">
                            <a href="https://github.com/kartikajls/rent-camera"
                                class="s-text">Source</a>
                        </div>

                    </div>

                    <button class="readmore-btn">Read More >> </button>
                </div>

            </div>
        </section>
    `;
}