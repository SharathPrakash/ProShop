import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex ',
        width: '100%',
    },
    media: {
        width: '130px',
        height: '130px'
    },
    content: {
        textAlign: "left",
        padding: theme.spacing(3),
        display: 'flex',
    },
    divider: {
        margin: `${theme.spacing(3)}px 0`
    },
    details: {
        display: 'flex',
        width: '100%',
        
    },
    controls: {
        display: 'flex',
        alignItems: 'center',        
        paddingBottom: theme.spacing(1),
    },
    cartIcon: {
        height: 38,
        width: 38,
        alignItems: 'center',
    },
}));

const ProductCard = ({ item, onAddedToCart, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
        <div className={classes.details}>
            <CardMedia
                className={classes.media}
                image={item.get('image')}
                title=""
            /></div>

            <div className={classes.details}>

                <CardContent className={classes.content} >
                    <Typography component="h6" variant="h6">
                        {item.get('title')}
                        <Typography variant="subtitle1" color="textSecondary">
                        <b>Desc :{item.get('description')} </b><br />
                        <b>Price: ${item.get('price')}</b><br />
                    </Typography>
                    </Typography>                   
                    
                </CardContent>
                </div>
                {/* <Divider className={classes.divider} light /> */}
                <div className={classes.controls}>
                    {item.get('inCart')
                        ?
                        <IconButton aria-label="Remove">
                            <RemoveShoppingCartIcon className={classes.cartIcon} onClick={onRemoveFromCart} />
                        </IconButton>
                        :
                        <IconButton aria-label="Add">
                            <AddShoppingCartIcon className={classes.cartIcon} onClick={onAddedToCart} />
                        </IconButton>

                    }
                </div>
           
        </Card>
    );
}

export default ProductCard