import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CustomButton = styled(Button)`
  position: fixed;
  right: 0;
  margin-right: 5%;
`;

export const BackButton = () => {
    return (
        <Link to="../">
            <CustomButton variant="contained" color="inherit" startIcon={<ArrowBackIcon />}>
                Home
            </CustomButton>
        </Link>
    )
}
