import {createTheme, ThemeProvider } from '@mui/material';
import DraftBoard from './DraftBoard';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={createTheme({palette: {mode: 'light'}})}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    {/*<Route path={'/home'} element={<Home />} />*/}
                    {/*<Route path={'/guests/:guestId/dates'} element={<GuestDateSelectionCard />} />*/}
                    {/*<Route path={'/product'} element={<ProductSelectionPage />} />*/}
                </Routes>
            </HashRouter>
            <h1>NFL Dynasty Draft Board</h1>
            <DraftBoard />
        </ThemeProvider>
    );
}

export default App;
