
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Box, Typography } from '@mui/material';
import { DataBox, LogoImg, logoStyle, modalStyle } from "../cards/styles";

interface HomePlanetModalProps {
    homePlanet: any,
    openHomePlanetModal: boolean,
    closeHomePlanetModal: () => void,
}

export const HomePlanetModal = ({ openHomePlanetModal, closeHomePlanetModal, homePlanet }: HomePlanetModalProps) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openHomePlanetModal}
            closeAfterTransition
        >
            <Fade in={openHomePlanetModal}>
                <Box sx={modalStyle}>
                    <Box sx={logoStyle}>
                        <LogoImg src="/images/star_wars_logo.jpg" height={150} alt="star_wars_logo" />
                    </Box>
                    <Box display="flex" m={3} flexDirection="column" alignItems="center">
                        <PublicIcon sx={{ fontSize: '40px' }} />
                        <Typography variant="h5" component="h2">
                            {homePlanet?.name}
                        </Typography>
                    </Box>
                    <DataBox>
                        <PeopleIcon />
                        <Typography variant="h6" sx={{ m: 2, fontWeight: '100' }}>
                            Population: {homePlanet?.population}
                        </Typography>
                    </DataBox>
                    <DataBox>
                        <ArrowDownwardIcon />
                        <Typography variant="h6" sx={{ m: 2, fontWeight: '100' }}>
                            Gravity: {homePlanet?.gravity}
                        </Typography>
                    </DataBox>
                    <DataBox>
                        <ThermostatIcon />
                        <Typography variant="h6" sx={{ m: 2, fontWeight: '100' }}>
                            Climate: {homePlanet?.climate}
                        </Typography>
                    </DataBox>
                    <DataBox>
                        <Button size="large" onClick={closeHomePlanetModal}>Close</Button>
                    </DataBox>
                </Box>
            </Fade>
        </Modal>
    )
}
