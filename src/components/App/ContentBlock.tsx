import { Flex, type FlexProps } from "@mantine/core";


export type ContentBlockProps = FlexProps & {
    variant?: 'default' | 'unstyled' | 'outlined';
};

const ContentBlock = (props: ContentBlockProps) => {
    return (
        <Flex
            direction={props.direction || "column"}
            align={props.align || "center"}
            justify={props.justify || "start"}
            bg='white'
            p={props.p || '20px 20px'}
            gap={5}
            {...props} 
            style={{
                borderRadius: '10px',
                border: props.variant === 'outlined' ? '2px solid #3b692f' : 'none',
                ...props.style
            }}
        />
    );
};

export default ContentBlock;
