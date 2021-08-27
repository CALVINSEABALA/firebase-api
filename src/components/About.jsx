import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';


const About = () =>{

    return (
        <Container>


            <Row className="justify-content-center">
                <Col xs={12} sm={8}>



                            <div className="content-item">
                                <h4>Personal Information</h4>
                                <hr/>
                                <p><b><a
                                    href="https://drive.google.com/file/d/1X8Ux4ZgaF0FgURcLdD-S0TKbAJCwKXL2/view?usp=sharing">SA
                                    ID Document</a></b></p>
                                <p>
                                    SURNAME : SEABALA <br/> NAMES : CALVIN MAROPENG <br/> DATE OF BIRTH : 27 JUNE
                                    1995 <br/> IDENTITY NUMBER : 9506275658083 <br/> GENDER : MALE <br/> MARITIAL STATUS
                                    : SINGLE <br/> RACE : AFRICAN <br/> COUNTRY : SOUTH AFRICA <br/> POSTAL ADDRESS : P
                                    O BOX 330 <br/> SOVENGA <br/> 0727 <br/> HOME LANGUAGE : SEPEDI <br/> OTHER
                                    LANGUAGES : ENGLISH <br/> CRIMINAL RECORD : NONE
                                </p>
                            </div>


                       </Col>
                <Col xs={12} sm={4}>

                        <div className="content-item">
                            <h4>Education</h4>
                            <hr/>

                            <p><b> MAMABUDUSHA SECONDARY SCHOOL </b><br/> GRADE 12/MATRIC -2013</p><br/>

                            <p><b>TSHWANE UNIVERSITY OF TECHNOLOGY</b><br/>
                                <a href="https://drive.google.com/file/d/1DV-6aDTUPuQrlMy8bLKWJosgN4Uk_G8o/view?usp=sharing">IT:
                                    SOFTWARE DEVELOPMENT</a> 2015 – 2020</p><br/>

                            <p><b>SOLO LEARN</b><br/> (free online course) certificates <br/>
                                <a href="https://www.sololearn.com/Certificate/1014-6149743/pdf/"> HTML
                                    Fundamentals </a> -2017 <br/>
                                <a href="https://www.sololearn.com/Certificate/1051-6149743/pdf/"> C++</a> -
                                2018 <br/>
                                <a href="https://www.sololearn.com/Certificate/1060-6149743/pdf/"> SQL
                                    Fundamentals</a> – 2018 <br/>
                                <a href="https://www.sololearn.com/Certificate/1059-6149743/pdf/"> PHP
                                    tutorial </a> - 2019 <br/>
                                <a href="https://www.sololearn.com/Certificate/1068-6149743/pdf/"> JAVA
                                    TUTORIAL </a> -2019 <br/>
                                <a href="https://www.sololearn.com/Certificate/1024-6149743/pdf/">JAVASCRIPT</a> -2019 <br/>
                                <a href="https://www.sololearn.com/Certificate/1097-6149743/jpg/"> React +
                                    Redux</a> -2020 <br/>
                                <a href="https://www.sololearn.com/Certificate/1023-6149743/jpg/"> CSS- </a> 2021
                            </p>

                        </div>

                </Col>
            </Row>

            <Row>

                <div className="footer">
                    <h4>Previous Work Experience</h4>


<Row>

                            <Col xs={12} sm={4}>

                                <p>
                                    Software Developer Intern<br/> 6 Months <br/> IncHub Polokwane.<br/> Email:
                                    <a href="mailto:plkinchub@gmail.com"> plkinchub@gmail.com</a> <br/> Cell: 061 477
                                    5152

                                </p>

                            </Col>
                            <Col xs={12} sm={4}>

                                <p>
                                    Technical Support Freelance <br/> 3 years <br/> SEABALATECHNOLOGIES(PTY)
                                    LTD. <br/> Email:
                                    <a href="mailto:SEABALATECHNOLOGIES@outlook.com"> SEABALATECHNOLOGIES</a><br/> Cell:
                                    061 477 5152

                                </p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <p>
                                    FullStack Developer Trainee <br/> 6 Months <br/> Mlab Code Tribe
                                    Polokwane <br/> Email:
                                    <a href="mailto:tyson@mlab.co.za"> Tyson Mothlbeng</a><br/> Cell: 078 649 8402
                                </p>
                            </Col>
</Row>

                </div>

                <div className="footer">
                    <h4>References</h4>
                    <Row>
                            <Col xs={12} sm={4}>

                                <p>
                                    Mpho Mashego <br/> Executive Director <br/> IncHub PLK. <br/> Email:
                                    <a href="mailto:plkinchub@gmail.com"> plkinchub@gmail.com </a><br/> Cell: 061 477
                                    5152

                                </p>

                            </Col>
                            <Col xs={12} sm={4}>

                                <p>
                                    Tshitake FM<br/> Lecture & Executive Director<br/> TUT: Polokwane campus & FTECH
                                    CONSULTING<br/> Email: <a
                                    href="mailto:TshitakeFM@tut.ac.za">TshitakeFM@tut.ac.za"</a><br/> Cell: 079 046 2424
                                </p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <p>
                                    Mashalane L<br/> Technical Support<br/> Capricorn College Ramokgopa
                                    Campus <br/> Email: <a
                                    href="mailto:lmashalane@capricorncollege.edu.za"> lmashalane@capricorncollege.edu.za</a><br/> Cell:
                                    074 478 1006
                                </p>
                            </Col>
                    </Row>
                </div>

            </Row>

        </Container>
    )
}
export default About;