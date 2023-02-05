import { Container } from './styles'

export function ButtonText({ isActive = false, title, ...rest }) {
  return(

  <Container 
    type="button" 
    isActive={isActive}
    {...rest}
  >
    {title}
  </Container>

  );
}