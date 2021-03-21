import { Grid } from '@material-ui/core';
import React  from 'react';
import { categories } from '../Categories/Categories';
import Category from '../Category/Category';


const Home = () => {
    
    return (
        <Grid container spacing={3}>
            
            <Grid item container />
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                <Grid item container>

                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)

                }
                </Grid>
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    );
};

export default Home;