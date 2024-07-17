import {Container} from './style'


// eslint-disable-next-line react/prop-types
export function Button({title, isNotActive = false, icon: Icon, ...rest}){
    return(
        <Container type='button' disabled={isNotActive} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}