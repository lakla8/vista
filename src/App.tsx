import { createTheme, Flex, MantineProvider, type MantineTheme } from "@mantine/core"
import Header from "./components/Header/Header"
import '@mantine/core/styles.css';
import RealTimePage from "./components/RealTime/RealTimePage";

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
            "#3b692f",
            "#315826",
            "#27471d",
            "#1d3614"
        ]
    }
})

function App() {

    return (

        <MantineProvider theme={theme}>

            <Flex gap='20px' bg='#f6f6f6' w='100vw' h='100vh' direction='column' justify='center' align='center' p='0 20px'>
                <Header title="Заголовок" description="Описание" />
                
                <RealTimePage />
            </Flex>
        </MantineProvider >

    )
}

export default App
