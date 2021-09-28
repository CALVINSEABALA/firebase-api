import React,{useState,useEffect} from 'react';
import Cards from './card';
import Grid from '@material-ui/core/Grid';
import news from '../news';

const getCards = CardsObj => {

    return ( <Grid item xs={10} sm={4}> <Cards {...CardsObj}/></Grid>
    );
};
const ApiData = () => {
    const [data,setData] = useState([])

    useEffect(() => {

       setData(news.articles)

    },[])

    return (
        <>
            <Grid container justify={'center'}>
            <h1 className={'my-4 font-weight-bold-display-4'} style={{align:'center',color:'#ffffff'}}>
                SABC NEWS API

            </h1>
            </Grid>
            <Grid container spacing={1} justify={'center'} id={'main'}>

                {data.map(CardsObj => getCards(CardsObj))}

            </Grid>
            </>
    )
}
export  default ApiData;