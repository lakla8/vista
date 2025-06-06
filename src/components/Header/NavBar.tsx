import { Button, Image, useMantineTheme } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";

const NavBar = () => {
    const theme = useMantineTheme();
    return (
        <ContentBlock w='100%' bg='green' mah={80} direction="row" align="center" justify="space-between" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <Image src='/VISTA.svg' h='30px' fit='contain' w='auto' />
            <Button variant="white" size="sm" radius={'50px'}>
                Войти в систему
            </Button>
        </ContentBlock>
    )
}

export default NavBar;