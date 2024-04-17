import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link, Outlet } from "react-router-dom"
const Layout = (props) => {

    return (
        <>
            <Typography>
                <nav >
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#" underline="none" variant="h6" style={{ color: props.barva }}>Home</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/cafe" underline="none" variant="h6" style={{ color: props.barva }}>Cafe</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/kalkulacka" underline="none" variant="h6" style={{ color: props.barva }}>Kalkulacka</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/pocitadlo" underline="none" variant="h6" style={{ color: props.barva }}>Pocitadlo</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/pocitadlo2" underline="none" variant="h6" style={{ color: props.barva }}>Pocitadlo2</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/prumer" underline="none" variant="h6" style={{ color: props.barva }}>Prumer</MuiLink></li>
                    <li style={{ listStyleType: "none" }}>
                        <MuiLink href="/Portfolio-react/#/ukolnicek" underline="none" variant="h6" style={{ color: props.barva }}>Ukolnicek</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop" underline="none" variant="h6" style={{ color: props.barva }}>E-shop</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop2" underline="none" variant="h6" style={{ color: props.barva }}>E-shop2</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop3" underline="none" variant="h6" style={{ color: props.barva }}>E-shop3</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/barva" underline="none" variant="h6" style={{ color: props.barva }}>Barva</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/penize" underline="none" variant="h6" style={{ color: props.barva }}>DONATE</MuiLink></li>
                    <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/hra" underline="none" variant="h6" style={{ color: props.barva }}>Hra</MuiLink></li></nav><Outlet></Outlet>
            </Typography>
        </>
    )
}
export default Layout;