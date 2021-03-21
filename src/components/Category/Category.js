import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '200px',
    },
}));



const Category = (props) => {
    const { title, imgUrl } = props.category;
    const classes = useStyles();
    const history = useHistory();

    const handleButton = (ridetype) => {
        history.push(`/ride/${ridetype}`);
    }

    return (

        
            <Grid item xs={3}>
                <Card className={classes.root} onClick={() => handleButton(title)}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imgUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
       




    );
};

export default Category;