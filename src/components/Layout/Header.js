import { Button, Navbar } from "react-bootstrap";
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark" className={classes.navbar} >
                <header className={classes.header}>
                    <Navbar.Brand>HOME</Navbar.Brand>
                    <Navbar.Brand>STORE</Navbar.Brand>
                    <Navbar.Brand>ABOUT</Navbar.Brand>
                    <Button variant="warning" onClick={props.onShowCart} >Your Cart</Button>
                </header>
            </Navbar>
            <h1>The Generics</h1>
        </>
    )
}

export default Header;