export function Content_2() {
    return `
    
        <section class="content_2">
            <div class="content-readmore">
                <h3>Kaggle dataset - Store Sales - Time Series Forecasting</h3>
                <div class="border"></div>

                <div class="readmore-content">
                    <p class="s-login">
                        In this dataset containt a thousands of product families sold at Favorita stores 
                        located in Ecuador: 
                    </p>

                    <ul class="p-list">
                        <li>train.csv</li>
                        <li>test.csv</li>
                        <li>sample_submission.csv</li>
                        <li>stores.csv</li>
                        <li>oil.csv</li>
                        <li>holidays_events.csv</li>
                    </ul>
                                  
                    <h4>Preparation Data</h4>
                    <p class="s-login">
                        First step is load all data of stores.csv, train.csv, and transaction.csv. 
                        In this data, we dont have missing value or data with a large range. 
                        So, it can be to process and analyze.
                    </p>
                    
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/1.jpg" class="pict-da-kecil">
                    </div>

                    <h4>Exploratory Data</h4>
                    <p class="s-login">
                        Import attribut for analyze data. First we can see transaction data. 
                        The transaction data contain information about date, store_nbr, and transaction.
                        We can analyze average sales per year by grouping transactions from 2013 to 2017.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/2.jpg" class="pict-da">
                    </div>

                    <p class="s-login">
                        We can see that the average transactions per year has been decreased. 
                        It happen from 2014 to 2016. The transactions decreased may be due to lack of people 
                        buying goods from family. Also, it happens on average transactions per week. For example, 
                        in January 6,2013 average transactions amount 1641.09. it means transactions made during the 
                        week starting the day after january 6,2013.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/3.jpg" class="pict-da">
                    </div>
                    <br>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/4.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        The transactions made by store can be seen in this part. 
                        For largest transactions occur in number 44,47,46,3. 
                        The store_nbr data identifies the store at which the products are sold. 
                        The store with the number 44 is in the city Quito, Pinchincha, type A, cluster 5.
                    </p>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/5.jpg" class="pict-da">
                    </div>
                    <br>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/6.jpg" class="pict-da">
                    </div>

                    <p class="s-login">
                        The train dataset contain id,date,store_nbr,family,sales,and onpromotion. 
                        The highest sales occur on family Grocery I at Quito, Pichincha, type D, cluster 13. 
                        So, it can be conclude that this area has the highest sales on May 2,2016.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/7.jpg" class="pict-da">
                    </div>

                    <h4>ANOVA</h4>
                    <p class="s-login">
                        Anova is a statistic analytic method. it can use test for difference between more groups. 
                        The groups mean treatment type. So, in this section, import attribute for analyze (i.e: f_oneway).
                        The groups there are AUTOMOTIVE,BABY CARE, BEAUTY, BEVERAGES, BOOKS, BREAD/BAKERY, CELEBRATION,
                        CLEANING, DAIRY, DELI, EGGS, FROZEN FOODS, GROCERY I, GROCERY II, HARDWARE, HOME AND KITCHEN I, 
                        HOME AND KITCHEN II, HOME APPLIANCES , HOME CARE, LADIESWEAR, LAWN AND GARDEN, LINGERIE, LIQUOR, 
                        WINE, BEER, MAGAZINES, MEATS, PERSONAL CARE, PET SUPPLIES, PLAYERS AND ELECTRONICS, POULTRY, 
                        PREPARED FOODS, PRODUCE, SCHOOL AND OFFICE SUPPLIES, SEAFOOD. So, first we can group it by family.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/8.jpg" class="pict-da">
                    </div>

                    <p class="s-login">
                        The result of oneway f test 92057,93 and p value 0. 
                        This result imply each category in family not significantly different based on sales. 
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Store Sales/9.jpg" class="pict-da-kecil">
                    </div>

                    <div class="source">
                        <img src="../src/asset/icon/github.png" class="s-source">
                        <a href="https://github.com/kartikajls/Store-Sales-Time-Series-Forecasting" class="s-text">Source</a>
                    </div>

                </div>

                <button class="readmore-btn">Read More >> </button>

            </div>

        
        
        </section>
    `;
}