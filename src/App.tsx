import { createTheme, Flex, MantineProvider } from "@mantine/core"
import Header from "./components/Header/Header"
import '@mantine/core/styles.css';
import RealTimePage from "./components/RealTime/RealTimePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "./components/Fourth/EmployeeDashboard";
import ManagerDashboard from "./components/Third/ManagerDashboard";
import HumanFactorMonitor from "./components/Second/HumanFactorMonitor";

import './components/Second/HumanFactorMonitor.css';
import './components/Fourth/EmployeeDashboard.css';
import './components/Third/ManagerDashboard.css';

export const FETCHES = false;

const theme = createTheme({
    defaultRadius: '10px',
    primaryColor: 'green',
    fontFamily: 'Helvetica, sans-serif',
    colors: {
        green: [
            "#e0f0db",
            "#c8e4bf",
            "#a8d89e",
            "#8db881",
            "#76a968",
            "#5f9a4f",
            "#4a7c59",
            "#315826",
            "#27471d",
            "#1d3614"
        ]
    }
})

function App() {

    return (

        <MantineProvider theme={theme}>

            <Flex gap='20px' bg='#f6f6f6' w='100vw' style={{overflowX: 'hidden'}} direction='column' justify='center' align='center' p='0 20px'>
                <Header title={'HUMAN FACTOR MONITOR'} description={
                    window.location.pathname === '/1' ? 'Анализ в реальном времени' : 
                    window.location.pathname === '/2' ? 'Матрица рисков, анализ ошибок системы' : 
                    window.location.pathname === '/3' ? 'Аналитика по направлениям и персоналу' : 
                    window.location.pathname === '/4' ? 'Аналитика по направлениям и подразделениям' : ''} />
                
                <BrowserRouter>
                    <Routes>
                        <Route path="/1" element={<RealTimePage />} />
                        <Route path="/4" element={<EmployeeDashboard />} />
                        <Route path="/3" element={<ManagerDashboard />} />
                        <Route path="/2" element={<HumanFactorMonitor />} />
                    </Routes>
                </BrowserRouter>
                
            </Flex>
        </MantineProvider >

    )
}

export default App
