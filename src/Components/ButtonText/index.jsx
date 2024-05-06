import { Container } from './styled'

export function ButtonText({icon: Icon, title}) {
  return(
    <Container>
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )
  
}