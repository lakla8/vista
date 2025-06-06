import { Title, type TitleProps } from "@mantine/core"
import ContentBlock from "./ContentBlock"

export type BlockTitleProps = TitleProps

const BlockTitle = (props: BlockTitleProps) => {
    return (
        <ContentBlock justify={'center'} align={'center'} bg='#8DB881'>
            <Title fz={18} order={2} {...props}/>
        </ContentBlock>
    )
}

export default BlockTitle;