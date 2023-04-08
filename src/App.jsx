import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import { FormContactContainer } from "./components/pages/Form/FormContact.container";
import ThemeContextProvider from "./context/ThemeContext/ThemeContext";
import DataContextProvider from "./context/DataContext/DataContext";
import { Home } from "./components/pages/Home/Home";
import DentistSelectedContainer from "./components/pages/DentistSelected/DentistSelectedContainer";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                <Route path="/" element={<Home />} />
                <Route path="/dentistas" element={<ProfessionalsContainer />} />
                <Route
                  path="/dentista/:id"
                  element={<DentistSelectedContainer />}
                />
                <Route path="/contacto" element={<FormContactContainer />} />
                <Route path="/favs" element={<FavoritesContainer />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </ThemeContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
