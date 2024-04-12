interface Props {
    children: any;
    style?: any;
    onClick?: any;
    id?: any;
}

export const Col = ({children, style, onClick, id}: Props) => {
    return (
        <div id={id} onClick={onClick} style={{
        justifyContent: style?.hrAlign ? style?.hrAlign : 'space-between',
        alignItems: style?.vrAlign ? style?.vrAlign : 'center',
        width: style?.width ? style?.width : '100%',
        margin: style?.margin ? style?.margin : ''}}>{children}</div>
    )
}