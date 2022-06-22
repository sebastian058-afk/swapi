import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import CharacterDetails from "../pages/characters/CharacterDetails"
import { CharactersPage } from "../pages/characters/CharactersPage"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="*" element={<Navigate to="characters" replace />} />
                    <Route path="characters" element={<CharactersPage/>}/>
                    <Route path="characters/:characterId" element={<CharacterDetails />} />
                    <Route path="*" element={<p>Page doesn't exist</p>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
