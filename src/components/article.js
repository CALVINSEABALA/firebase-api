import React,{useState} from 'react';
import news from '../news';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import '../App.css';

const Article = (props) => {
    const {article} = props.location;
    return (
        <div className={'container-fluid'} style={{backgroundImage:"url(/back.jpg)",
            backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <Container justify={'center'}>
            <Row justify={'center'}>
                {
                    console.log(article)
                }

                    <Col xs={12}>

                        <div className={'pic'}>
                            <h3 className={'title'}>{article.title}</h3>
                            <h5> {article.author} - {article.publishedAt}</h5>
                            <img src={article.urlToImage} alt={'Cover'} className={'cover'}/>

                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={'content'}>
                            <p>{article.description} {article.content}</p><h5>- {article.source.name}</h5>
                        </div>
                    </Col>






            </Row>
            </Container>
        </div>

    );
}

export default Article;