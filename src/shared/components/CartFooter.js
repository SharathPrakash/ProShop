import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import * as cartActions from "../../modules/shopping-cart/store/selectors";
import { getItemSubtotal, getItemsWithTotals } from "../../modules/shopping-cart/store/selectors";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display: 'flex ',
        width: '100%',
        overflowX: 'auto',
        position: "fixed",
    },

    footerbar: {
        top: 'auto',
        bottom: 0,
    },
    title: {
        flexGrow: 1,
        align: "right"
    }
});

const CartFooter = ({ items, subTotal, changeQuantity, remoteItemFromCart }) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    return (
        <div className={classes.root}>
            <AppBar className={classes.footerbar}  color="#282c34">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <p>Total : ₹{subTotal} </p>
                        </Typography>
                        <div>
                            <Typography variant="h6" className={classes.title}>
                                <Button variant="contained" color="primary" href="/checkout">
                                    Checkout
                                </Button>
                            </Typography>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: getItemsWithTotals(state),
        subTotal: getItemSubtotal(state)
    };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        ...cartActions
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartFooter)
