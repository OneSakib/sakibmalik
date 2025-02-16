"use client";

import { useEffect } from "react";
import AOS from "aos";
const ResumeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>As a dedicated software developer with expertise in Python, I specialize in building robust applications using frameworks like Django, along with front-end technologies such as React.js, Vue.js, and Nuxt.js. I also have hands-on experience deploying Django applications on AWS EC2, ensuring reliable hosting, and utilizing Docker for containerization.</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Sumary</h3>

                    <div className="resume-item pb-0">
                        <h4>Sakib Malik</h4>
                        <p><em>Python Developer</em></p>
                        <ul>
                            <li>Sahranpur, India</li>
                            <li>+91 8954664647</li>
                            <li>maliksakib347@gmail.com</li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>Master of Computer Application</h4>
                        <h5>2020 - 2022</h5>
                        <p><em>Dev Bhoomi Group Of Institutions, Sahranpur</em></p>
                        <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                    </div>

                    <div className="resume-item">
                        <h4>Bachelor of Computer Application</h4>
                        <h5>2017 - 2020</h5>
                        <p><em>Ramoot College Of Education, Saharanpur</em></p>
                        <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                    </div>

                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Python Developer</h4>
                        <h5>2022 - Present</h5>
                        <p><em>Mohali, Punjab </em></p>
                        <ul>
                            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </section>
}
export default ResumeSection;