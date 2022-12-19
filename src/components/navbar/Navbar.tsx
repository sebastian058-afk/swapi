import { AppBar, Box, Toolbar } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from "../../themes/theme-providers";
import { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const CustomToolbar = styled(Toolbar)`
    background-color: #000000;
    height: 150px;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 250px;
    cursor: pointer;
`

export const Navbar: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <CustomToolbar>
                        <Link to="../">
                            <LogoImg src="/images/star_wars_logo.jpg" width={250} alt="star_wars_logo"/>
                        </Link>
                    </CustomToolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}