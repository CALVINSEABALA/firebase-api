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




const useStyles = makeStyles({
    root: {
        minWidth: 50,
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
});


const  Cards = (props) => {
    const { title, author,description,source, urlToImage, publishedAt,url } = props;
    const classes = useStyles();
    return (


        <Card className={classes.root} variant="outlined">
            <CardHeader
                title={source.name} subheader={author}/>
            <CardMedia
                className={classes.media}
                image={urlToImage}
                title={title}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p"  className={classes.p} >
                    {
                        description
                    }
                    <br/>
                    Published Date: {publishedAt}
                </Typography>
            </CardContent>



                <CardActions>
                    <Button size="small" variant={'outlined'} onClick={() => window.open(url)}> More Details</Button>
                </CardActions>
        </Card>
    );
};
export default Cards;
