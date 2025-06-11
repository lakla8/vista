import { Anchor, Button, Group, Image, Text } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";

const NavBar = () => {
    return (
        <ContentBlock w='100%' bg='green' mah={80} direction="row" align="center" justify="space-between" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <Image src='/VISTA.svg' h='30px' fit='contain' w='auto' />
            <Group gap={40}>
                <Anchor href='/1'>
                    <Text lh={1} c='white' fw='600' fz={16}>Главная</Text>
                </Anchor>
                <Anchor href='/2'>
                    <Text lh={1} c='white' fw='600' fz={16}>Аналитика HF</Text>
                </Anchor>
                <Anchor href='/3'>
                    <Text lh={1} c='white' fw='600' fz={16}>Монитор руководителя</Text>
                </Anchor>
                <Anchor href='/4'>
                    <Text lh={1} c='white' fw='600' fz={16}>Кабинет Сотрудника</Text>
                </Anchor>
            </Group>
            <Button variant="white" size="sm" radius={'50px'}>
                Войти в систему
            </Button>
        </ContentBlock>
    )
}

export default NavBar;