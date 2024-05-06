import { FiStar } from "react-icons/fi";
import { Container, StarButton } from './styled';

export function StarAviation({isActive = false, ...rest}) {
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <StarButton key={index} type="button" $isactive={isActive}  {...rest}>
      <FiStar />
    </StarButton>
  ));

  return(
    <Container>
      {stars}
    </Container>
  )
}