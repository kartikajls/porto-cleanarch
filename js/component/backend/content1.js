export function Content_1() {
    return `
        <section class="content_1">
            <div class="content-main">
                <div class="content-readmore">

                    <h3>Portal Job's </h3>
                    <div class="border"></div>

                    <div class="readmore-content">
                    
                        <p class="s-login">
                            This project made by me and my friend for Final Project in Hacktive8 Academy. Portal
                            Porjectcontaint
                            is one of the biggest in 17 SDG's in Indonesia "Pekerjaan Layak dan Pertumbuhan Ekonomi"
                            .Indonesia
                            is the most population country in ASEAN, so a job portal has been established to bridge
                            the gap regarding employment.
                        </p>
                        <h4>Table of content</h4>
                        <table>
                            <tr>
                                <td>1.</td>
                                <td><a href="https://github.com/kartikajls/portal-job-RESTful-API/tree/main/user-service">User
                                        Service</a></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td><a
                                        href="https://github.com/kartikajls/portal-job-RESTful-API/tree/main/company-service">Company
                                        Service</a></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td><a href="https://github.com/kartikajls/portal-job-RESTful-API/tree/main/job-service">
                                        Job
                                        Service</a></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td><a href="https://github.com/kartikajls/portal-job-RESTful-API/tree/main/job-service">Application
                                        Service</a></td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td><a href="https://github.com/kartikajls/portal-job-RESTful-API/tree/main/admin-service">Admin
                                        Service</a></td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td><a
                                        href="https://github.com/kartikajls/portal-job-RESTful-API/blob/main/docker-compose.yml">Dockerfile</a>
                                </td>
                            </tr>
                        </table>
                        <h4>Feature</h4>
                        <ul class="p-list">
                            <li>Mircroservice</li>
                            <li>RESTful API</li>
                            <li>Whatsapp Gateway API</li>
                            <li>Echo Framework</li>
                            <li>Gorm</li>
                            <li>Bcrypt</li>
                            <li>Docker</li>
                            <li>PostgeSQL</li>
                        </ul>
                        <h4>Work Flow</h4>
                        <img src="../src/asset/backend/0. Work_Flow.drawio.png" class="i-login">
                        <p class="s-login">The Portal Job use a simple workflow to understand. Jobseeker use activate email
                            for
                            register and
                            fill profile, skill, and portfolio. The Company register too and use activate email and fill the
                            profile. After that Company create the job tittle, role, salary, tag and description. Then,
                            Jobseeker apply the jobs and wait for interview announcement. Whether or not job seekers are
                            accepted, they still receive a WhatsApp notification.
                        </p>
                        <h4>How to Use</h4>
                        <table class="col-backend">
                            <tr>
                                <td>1. </td>
                                <td>register email user as jobseeker or company</td>
                            </tr>
                            <tr>
                                <td>2. </td>
                                <td>Login and get JWT Token</td>
                            </tr>
                            <tr>
                                <td>3. </td>
                                <td>The JWT Token are use for jobseeker or company to fill profile</td>
                            </tr>
                            <tr>
                                <td>4. </td>
                                <td>The job created by company and applied for jobseeker</td>
                            </tr>
                            <tr>
                                <td>5. </td>
                                <td>We use fonnte gateway API for notification jobseeker</td>
                            </tr>
                            <tr>
                                <td>6. </td>
                                <td>Admin cant report jobseeker, company, and jobs if it is suspicious</td>
                            </tr>
                        </table>

                        <div class="source">
                            <img src="../src/asset/icon/github.png" class="s-source">
                            <a href="https://github.com/kartikajls/portal-job-RESTful-API" class="s-text">Source</a>
                        </div>

                    </div>

                    <button class="readmore-btn">Read More >> </button>
                </div>
            </div>
        
        </section>
        
    `;
}