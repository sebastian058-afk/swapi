import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
};

export const DataBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const logoStyle = { 
    backgroundColor: 'black', 
    height: '200px', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
}

export const LogoImg = styled.img`
    width: 250px;
    `