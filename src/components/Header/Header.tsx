import { Stack } from "@mantine/core";
import NavBar from "./NavBar";
import PageTitle from "./PageTitle";

export type HeaderProps = {
    title: string
    description: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return ( 
        <Stack w='100%'>
            <NavBar />

            <PageTitle title={props.title} description={props.description} />
        </Stack>
    )
}

export default Header;