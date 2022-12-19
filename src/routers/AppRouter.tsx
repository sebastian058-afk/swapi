import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { FilmsPage, FilmDetails} from "../pages/films"
import { CharacterDetails } from '../pages/characters';
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Breadcrumbs/>
                <Routes>
                    <Route path="*" element={<Navigate to="films" replace />} />
                    <Route path="films" element={<FilmsPage/>} />
                    <Route path="films/:filmId" element={<FilmDetails />}/>
                    <Route path="films/:filmId/characters/:characterId" element={<CharacterDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
