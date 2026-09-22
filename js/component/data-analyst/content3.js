export function Content_3() {
    return `
        <section class="content_3">
            <div class="content-readmore">
                <h3>Report - Produksi Padi di Sumatera Tahun 1993-2020</h3>
                <div class="border"></div>

                <div class="readmore-content">
                    <p class="s-login">
                        Tujuan dari project ini adalah menganalisa data yang bersumber 
                        dari website kaggle.com tentang Dataset Tanaman Padi di Sumatera, 
                        Indonesia dan melihat insight yang dihasilkan dari proses analisis data tersebut.
                    </p>

                    <h4>Sumber Data</h4>
                    <p class="s-login">
                        Pengambilan data diperoleh melalui website BPS pada kategori tanaman pangan 
                        utama dari 8 provinsi di pulau Sumatera yaitu Nanggroe Aceh Darussalam (NAD), Sumatera Utara, 
                        Riau, Jambi, Sumatera Selatan, Bengkulu dan Lampung. Data yang digunakan adalah data dari tahun 1993 
                        hingga tahun 2020 untuk dataset padi. Data memuat hasil produksi tahunan dan luas panen atau luas lahan. 
                        Kemudian data perubahan cuaca diperoleh melalui website BMKG untuk data harian curah hujan, kelembapan, 
                        dan temperatur rata-rata atau suhu rata-rata dari tahun 1993 hingga tahun 2020. Pengambilan data juga 
                        berasal dari website kaggle pada bagian data set tranding.
                    </p>

                    <div class="source">
                        <a href="https://www.kaggle.com/datasets/ardikasatria/datasettanamanpadisumatera" class="s-text">Sumber: Kaggle</a>
                    </div>

                    <p class="s-login">
                        Fokus pada satu komoditi yaitu Padi yang merupakan komoditi utama. 
                        Diharapkan dapat menjadi komoditi yang bisa memenuhi kebutuhan pangan masyarakat 
                        sumatera dan dapat meningkatkan sektor pertanian di sumatera. Sehingga perlu adanya 
                        analisis lebih lanjut terkait pertumbuhan produksi padi di Sumatera.
                    </p>

                    <h4>Rumusan Masalah</h4>
                    <ul class="p-list">
                        <li>Apakah terdapat korelasi variabel yang lain terhadap variabel produksi padi ?</li>
                        <li>Berapa nilai produksi padi di tiap provinsi ?</li>
                        <li>Bagaimana pertumbuhan produksi padi dari tahun 1993-2020 ?</li>
                    </ul>

                    <h4>Pembahasan</h4>
                    <p class="s-login">
                        Bagian 1 - Preparation Data:
                    </p>
                    <p class="s-login">
                        Pertama yang dilakukan dalam menganalisis data adalah tahap preparation data. 
                        Load data pada python menggunakan syntax pandas. Dapat dilihat terdapat variabel Provinsi, 
                        Tahun, Produksi, Luas Panen, Curah hujan, Kelembapan, Suhu rata-rata.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/1.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Bagian 2 - Data Cleansing:
                    </p>
                    <p class="s-login">
                        Pada bagian ini, hal yang dilakukan adalah melihat dataset Tanaman Padi Sumatera,
                        Indonesia sudah sesuai dengan type data tersebut. Dari informasi dibawah ini, 
                        bisa dilihat masing-masing variabel sudah sesuai dengan tipe dari data.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/2.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Proses selanjutnya melihat missing value, 
                        dalam hal ini data terlihat lengkap dan terlihat dari tidak adanya missing value yang ditunjukan.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/3.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Proses selanjutnya adalah melihat outlier. outlier merupakan nilai ekstrim atau nilai berbeda 
                        dengan pengamatan yang dilakukan. nilai ini muncul akibat perbedaan satuan atau nilai asli dari 
                        kodisi sebenarnya.Menggunakan 3 cara untuk melihat, yaitu dengan melihat nilai minimal dan 
                        maksimal di setiap variabelnya.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/4.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Dengan menggunakan histogram, dapat mengetahui visualisasi dari outlier tersebut.
                    </p>
                   
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/5.jpg" class="pict-da">
                    </div>

                    <p class="s-login">
                        Menggunakan boxplot , juga bisa mengetahui outlier dengan memvisualisasikannya.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/6.jpg" class="pict-da">
                    </div>

                    <p class="s-login">
                        Hasilnya dapat diketahui jika variabel Luas Panen terdapat outlier. 
                        Nilai outlier yang terdapat di variabel Luas Panen kemungkinan berasal dari perbedaan wilayah 
                        tiap 
                        provinsi.Setelah melihat adanya outlier pada variabel Luas Panen, proses selanjutnya adalah 
                        memperbaiki atau manipulation data dengan metode IQR. Setelah dilakukan proses IQR, 
                        menghasilkan variabel baru yaitu Luas Panen yang sudah di hitung. Dapat dilihat hasilnya 
                        tidak terdapat lagi outlier pada variabel tersebut.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/7.jpg" class="pict-da">
                    </div>
                    
                    <p class="s-login">
                        Bagian 3 - Exploratory Data:
                    </p>

                    <p class="s-login">
                        Pada bagian ini, data akan di explore untuk menjawab 3 pertanyaan pada rumusan masalah. 
                        Rumusan pertanyaan yang pertama adalah apakah terdapat korelasi antara variabel lain dengan 
                        variabel produksi. Cara menjawabnya dengan menggunakan syntax correlation dapat mengetahui 
                        vairabel mana saja yang akan mempengaruhi Produksi.
                    </p>
                    <p class="s-login">
                        Seperti gambar dibawah ini, Adanya korelasi variabel antara vairabel hanya ditunjukan 
                        dengan variabel Luas Panen saja. Variabel curah hujan, kelembapan, dan suhu rata-rata 
                        tidak menunjukan korelasi. Luas Panen merupakan gambaran pengukuran subjektif, seperti 
                        penggunaan benih, penggunaan air untuk irigasi (blok pengairan), informasi dari petani dan 
                        aparat desa, serta pengamatannya dengan pandangan mata (eye estimate). Sehingga dalam pengamatan 
                        database ini Luas Panen memiliki korelasi dengan produksi padi. 
                    </p>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/8.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Hal ini juga diperkuat dengan adanya visualisasi menggunakan 
                        seaborn regplot yang menunjukan adanya nilai yang mendekati tren line.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/9.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Pada pertanyaan nilai produksi padi tiap provinsi. Dapat dijawab dengan menggunakan 
                        data produksi padi tertinggi di sepanjang tahun 1993-2020. Hasilnya adalah produksi padi 
                        di provinsi Aceh sebesar 461.060 Ton, Sumatera Utara sebesar 847.610 Ton, Sumatera barat 
                        sebesar 507.454 Ton, Riau 156.088 Ton, Jambi sebesar 215.975 Ton, Sumatera Selatan sebesar 
                        872.737 Ton, Bengkulu sebesar 147.680 Ton, dan Lampung sebesar 707.266 Ton.
                    </p>
                        
                    <p class="s-login">
                        Kemudian untuk produksi terendah di tiap provinsinya dapat dijawab dengan 
                        menggunakan produksi padi terendah di sepanjang tahun 1993-2020. Hasilnya produksi padi di 
                        provinsi Aceh sebesar 293.067 Ton, Sumatera Utara sebesar 388.591 Ton, Sumatera barat sebesar 
                        222.021 Ton, Riau 63.142 Ton, Jambi sebesar 69.536 Ton, Sumatera Selatan sebesar 422.109 Ton, 
                        Bengkulu sebesar 64.137 Ton, dan Lampung sebesar 390.799 Ton.
                        <br><br>
                        Kemudian untuk pertumbuhan produksi padi di sepanjang tahun 1993-2020 dapat di visualisasikan 
                        pada gambar dibawah ini.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/10.jpg" class="pict-da-kecil">
                    </div>

                    <p class="s-login">
                        Pada pertumbuhan produksi padi di sumatera, tahun 2018-2020 mengalami penurunan. 
                        Seperti pada data visualisasi dibawah ini. dapat dilihat adanya penurunan produksi padi 
                        di tahun 2018-2020. Hal ini disebabkan adanya virus covid-19 yang sedang melanda dunia dan 
                        dampaknya juga dirasakan oleh masyarakat di Indonesia.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Dataset Padi/11.jpg" class="pict-da-kecil">
                    </div>

                    <h4>Kesimpulan</h4>
                    <p class="s-login">Dari analisis diatas dapat disimpilkan:</p>

                    <ul class="p-list">
                        <li>
                            Adanya korelasi variabel. Variabel Luas Panen dengan Produksi. 
                            Hal ini ditunjukan dengan nilai 1.00 yang artinya ada korelasi variabel.
                        </li>
                        <li>  
                            Nilai produksi padi di tunjukan dengan nilai maksimal dan minimal di setiap provinsi. 
                            Hal ini dapat dilihat, Provinsi Sumatera Selatan memiliki produksi padi yang besar ketimbang 
                            provinsi lainnya di pulau Sumatera. Kemudian produksi padi terendah berada di provinsi Jambi.
                        </li>
                        <li>
                            Pertumbuhan produksi padi dari tahun 1993-2017 mengalami kenaikan, 
                            akan tetapi di tahun 2018-2020 mengalami penurunan. Penurunan ini diakibatkan 
                            adanya virus corona yang melanda Indonesia, bahkan dunia. Sehingga, berdampak pada 
                            produksi padi di Sumatera
                        </li>
                    </ul>

                    <div class="source">
                        <img src="../src/asset/icon/github.png" class="s-source">
                        <a href="https://github.com/kartikajls/Report-Tanaman-Padi-di-Pulau-Sumatera" class="s-text">Source</a>
                    </div>

                </div>

                <button class="readmore-btn">Read More >> </button>
            </div>
        </section>
    
    `;

}