import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import '../App.css';




const useStyles = makeStyles({
    root: {
        minWidth: 50,
        backdropFilter:'blur(1px)',
        boxShadow:' 0 4px 30px rgba(0, 0, 0,.1)',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 6,
        marginTop: 6,
    },
    media: {
        height: '150px',
        paddingTop: '36.25%',
    },
    P: {
        fontSize: 3,

    },
    btn: {
        backgroundColor:'#448AFF',

    },
    link: {
      textDecoration:'none',
      fontWeight:'bold',
        color:'white',
    }
});


const  Cards = (props) => {
    const CardsObj = props;
    const { title, author,description,source, urlToImage, publishedAt,url,content } = props;
    const classes = useStyles();
    return (


        <Card className={classes.root} variant="outlined">
            <CardHeader
                title={source.name}/>
            <CardMedia
                className={classes.media}
                image={urlToImage}
                title={title}
            />

            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p"  className={classes.p} ><b>
                    {title
                    }</b>
                    <br/>
                </Typography>
            </CardContent>



                <CardActions>
                    <Button size="small" variant={'outlined'} className={classes.btn}> <NavLink to={{pathname:'/Article',
                        article:CardsObj}}  className={classes.link}> Read</NavLink></Button>
                </CardActions>
        </Card>
    );
};
export default Cards;
