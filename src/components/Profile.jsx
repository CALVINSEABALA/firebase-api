
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';



const Profile = () =>{

    return (
        <Container>
            <h2 className={'h2'}> Contact Details Of C SEABALA</h2>
            <br/>
            <br/>

            <Row className="justify-content-md-center">


                <Col xs={12} sm={8}>
                    <p><PublicIcon/> <a href={'https://calvinseabala.github.io/'}> Website</a> </p>

                    <p><PhoneIcon/> (+27)79 302 1300 / (+27)68 016 6894</p>
                    <p><EmailIcon/> <a href="mailto:seabalacalvin@gmail.com">-seabalacalvin@gmail.com</a> / <a href="mailto:calvinmseabela@gmail.com"> calvinmseabela@gmail.com</a></p>
                    <p><InstagramIcon/> @calvin_seabala (Instagram) / <a href="https://www.linkedin.com/in/calvin-m-seabala-55311290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B33zBto%2FXSDKQt5LvwTWH2g%3D%3D"> Calvin M Seabala (LinkedIn)</a></p>
                    <p><RoomIcon/> <a href={'https://www.google.com/maps/place/Gate+One/@-23.8808697,29.7299037,1471m/data=!3m1!1e3!4m13!1m7!3m6!1s0x1ec6c8c21b8044f9:0x686c27377f602369!2sMankweng!3b1!8m2!3d-23.8836683!4d29.7078785!3m4!1s0x1ec6c8f6e93d6a17:0x17bbca2980398114!8m2!3d-23.8807806!4d29.7385365'}>Location</a> </p>
                </Col>

            </Row>

        </Container>
    )
}
export default Profile;