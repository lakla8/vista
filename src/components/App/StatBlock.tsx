import { Text, type TextProps } from "@mantine/core";
import ContentBlock from "./ContentBlock";

type StatBlockProps = {
    title: string,
    value: string,
    titleProps?: TextProps,
    valueProps?: TextProps
}

const StatBlock = (props: StatBlockProps) => {
    return (
        <ContentBlock gap={5}>
            <Text lh={1} c='black' fw='600' fz={16} {...props.titleProps}>{props.title}</Text>
            <Text lh={1} c='black' fw='600' fz={32} {...props.valueProps}>{props.value}</Text>
        </ContentBlock>
    )
}

export default StatBlock;