import { InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import HomeContainer from "../flex/HomeContainer";


export const SearchBar = ({handleChange}:any) => {

    return (
        <HomeContainer>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                
                <InputBase
                    id="search-input"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Character"
                    inputProps={{ 'aria-label': 'search character' }}
                    onChange={handleChange}
                    onSubmit={(event) => event?.preventDefault()}
                />
                <SearchIcon aria-label="search" />
            </Paper>
        </HomeContainer>
    )
}
