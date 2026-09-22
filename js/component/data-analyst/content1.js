export function Content_1() {
    return `
        <section class="content_1">
            <div class="content-readmore">

                <h3>Analisis-Sentimen</h3>
                <div class="border"></div>

                <div class="readmore-content">
                    <p class="s-login">
                        Pada tulisan kali ini, Saya akan mencoba untuk mengenalisis sentimen masyarakat terhadap
                        Calon
                        Presiden Ganjar Pranowo di Tahun 2024 dengan menggunakan metode Naive Bayes. Metode Naive
                        Bayes
                        merupakan sebuah metode yang digunakan untuk memprediksi peluang di masa depan berdasarkan
                        pengalaman di masa sebelumnya dengan memperhatikan asumsi yg sangat kuat (naïf) akan
                        independensi dari masing-masing kondisi / kejadian. Data yang digunakan bersumber dari
                        asumsi
                        masyarakat yang diambil dari komentar tweet di sosial media twitter atau X. Dengan
                        menggunakan
                        teknik "Scrapping Data", sampel yang diambil 200 komentar masyarakat dengan kata kunci yaitu
                        "Ganjar-Pranowo". Kata kunci "Ganjar Pranowo" sempat menjadi tranding topik setelah Pemilu
                        tahun
                        2024 berakhir, tepatnya data ini diambil pada tanggal 15 Maret 2024.
                    </p>
                    <br>
                    <h4>Data</h4>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/1.jpg" class="pict-da">
                    </div>
                    <p class="s-login">
                        Data yang digunakan adalah komentar yang diambil pada platform tweeter atau X yang menjadi
                        trending topik "Ganjar-Pranowo" pada tanggal 15 Maret 2024. Data ini diambil dengan
                        menggunakan
                        teknik Scrapping data, yaitu dengan menarik data pada platform X atau twitter dengan
                        menggunakan
                        bahasa pemrograman python sebanyak 200 komentar atau 200 sampel. Data tersebut akan
                        berbentuk
                        seperti ini.
                    </p>
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/2.jpg" class="pict-da">
                    </div>
                    
                    <h4>Proses Pengolahan Data</h4>
                    <P>Cleaning Data</P>
                    <p class="s-login">
                        Berdasarkan data mentah diatas, proses "cleaning data" dilakukan untuk memisahkan variabel
                        yang
                        tidak dibutuhkan. Pada tahap ini data yang akan diambil adalah data pada kolom full_text,
                        username, dan created_at. Pada kolom full_text terdapat isi komentar masyarakat pada
                        platform X
                        atau twitter yang akan digunakan untuk proses analisis, kolom username dan created_at
                        digunakan
                        untuk melihat username yang menulis dan waktu komentar itu dibuat.
                        <br>
                        Setelah selesai memilih data yang akan digunakan, proses selanjutnya adalah menghilangkan
                        atau
                        membuat tulisan pada kolom full_text bisa dibaca secara baik dengan menggunakan syntax yang
                        ada
                        pada bahasa pemrograman python. Maka hasilnya bisa dilihat seperti dibawah ini.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/3.jpg" class="pict-da">
                    </div>
                    
                    <p class="s-login">
                        Selanjutnya adalah proses normalisasi. Proses ini digunakan untuk menormalisasi tulisan atau
                        mengganti kata singkatan, seperti "yg, jdi, utk, koq, utk, dll" menjadi "yang, jadi, untuk"
                        ,
                        menghilangkan emoticon, dan menghilangkan tulisan yang tidak ada hubungannya sepert "anis
                        dan
                        prabowo". Sehingga dengan menggunakan python proses normalisasi kata-kata tersebut
                        dilakukan.
                    </p>
                    
                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/4.jpg" class="pict-da-kecil">
                    </div>

                    <p>Analisis TextBlob</p>
                    <p class="s-login">
                        Menggunakan analisis textBlob, kita sudah dapat menganalisis dan mengetahui berapa nilai
                        yang
                        dihasilkan dari komentar positif, netral, dan negatif. Textblob merupakan salah satu tools
                        atau
                        lebih tepatnya library python untuk pemprosesan dibidang "Natural Language Processing (NLP)"
                        menggunakan bahasa python. Melalui textblob, kita dapat melakukan berbagai proses terhadap
                        data
                        teks mulai dari yang sederhana seperti tokenisasi (pemotongan kata) sampai analisa
                        sentiment.
                        Maka hasilnya akan bisa dilihat
                    </p>
                    <br>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/5.jpg" class="pict-da-kecil">
                    </div>
                    
                    <p class="s-login">
                        Bisa dilihat dari gambar diatas. Setelah pemilu 2024 berakhir, komentar masyarakat di
                        aplikasi
                        twitter atau X masih tergolong positif. Hasil menunjukan komentar positif sebesar 82, netral
                        73,
                        dan negatif 34. Hal ini mungkin terjadi karena masih adanya kepercayaan masyarakat pada
                        calon
                        presiden Ganjar Pranowo dengan melihat rekam jejak beliau yang pernah menjadi Gubernur Jawa
                        Tengah.

                        Setelah menganalisis dengan menggunakan library TextBlob, data yang dianalisis dapat
                        divisualkan
                        menjadi gambar seperti ini.
                    </p>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/6.jpg" class="pict-da-kecil">
                    <div>
                    
                    <p>Analisis Sentimen</p>
                    <P class="s-login">
                        Jika kita sudah melihat jumlah komentar positif, netral, dan negatif dengan menggunakan
                        tools
                        TextBlob. Sekarang dengan menggunakan metode Naive Bayes, akan menghasilkan komentar
                        positif,
                        netral, dan negatif dengan tingkat akurasi sebesar 0.75 atau 75 persen. Metode Naive Bayes
                        merupakan metode pengklasifikasian berdasarkan probabilitas sederhana dan dirancang agar
                        dapat
                        dipergunakan dengan asumsi antar variabel penjelas saling bebas (independen). Pada algoritma
                        ini
                        pembelajaran lebih ditekankan pada pengestimasian probabilitas. Keuntungan algoritma naive
                        bayes
                        adalah tingkat nilai error yang didapat lebih rendah ketika dataset berjumlah besar, selain
                        itu
                        akurasi naive bayes dan kecepatannya lebih tinggi pada saat diaplikasikan ke dalam dataset
                        yang
                        jumlahnya lebih besar.
                        <br>
                        Sehingga setelah dilakukan proses analisis dengan menggunakan metode Naive Bayes, hasil yang
                        didapat cukup berbeda dengan menggunakan tools TextBlob. Hal ini dikarenakan metode yang
                        digunakan Naive Bayes memiliki tingkat akurasi 0.75 atau 75 persen, sehinggal hasil yang
                        didapat
                        seperti berikut.
                    </P>

                    <div class="scroll-samping">
                        <img src="../../../src/asset/da/Scrapping Data Twitter/7.jpg" class="pict-da">
                    </div>

                    <div class="source">
                        <img src="../src/asset/icon/github.png" class="s-source">
                        <a href="https://github.com/kartikajls/Analisis-Sentimen" class="s-text">Source</a>
                    </div>
                                        
                </div>

                <button class="readmore-btn">Read More >> </button>
            </div>
                
            
        </section>
    `;
}