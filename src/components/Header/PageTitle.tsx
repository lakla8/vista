import { Title } from "@mantine/core"
import ContentBlock from "../App/ContentBlock"

export type PageTitleProps = {
    title: string,
    description: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <ContentBlock bg='green' direction='row' align='center' justify='space-between' w='100%'>
            <Title order={1} fz="48px" c='white' fw='600' style={{textTransform: 'uppercase'}}> 
                {props.title}
            </Title>

            <Title order={2} c='white' fw='600'>
                {props.description}
            </Title>
        </ContentBlock>
    )
}

export default PageTitle;