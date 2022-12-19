import { InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import HomeContainer from "../flex/HomeContainer";

interface SearchBarProps {
    handleChange: (event: any) => void;
    title: string;
}


export const SearchBar = ({handleChange, title}:SearchBarProps) => {

    return (
        <HomeContainer>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                
                <InputBase
                    id="search-input"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={title}
                    inputProps={{ 'aria-label': 'search character' }}
                    onChange={handleChange}
                    onSubmit={(event) => event?.preventDefault()}
                />
                <SearchIcon aria-label="search" />
            </Paper>
        </HomeContainer>
    )
}
