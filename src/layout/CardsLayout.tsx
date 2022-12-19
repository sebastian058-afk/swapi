import ProgressContainer from '../components/ui/flex/ProgressContainer';
import Box from '@mui/material/Box';
import WhiteCircularProgress from '../components/ui/WhiteCircularPRogress';
import { AlertBar } from '../components/ui/feedback/AlertBar';

interface CardsLayoutProps{
    isLoading?: boolean;
    error?: any;
    children: JSX.Element;
}

export const CardsLayout = ({isLoading, error, children }: CardsLayoutProps ) => {
    return (
        <>
            {
                isLoading ?
                    <ProgressContainer>
                        <Box>
                            <WhiteCircularProgress />
                        </Box>
                    </ProgressContainer>
                    :
                    <>
                        { children }
                    </>
            }

            {
                error && <AlertBar errorLabel={`An error has ocurred: ${error}`} />
            }
        </>
    )
}
