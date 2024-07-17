import { FiStar } from "react-icons/fi";
import { Container, StarButton } from './styled';

// eslint-disable-next-line react/prop-types
export function StarAviation({ activeStars = 0, ...rest }) {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }).map((_, index) => (
    <StarButton
      key={index}
      type="button"
      $isactive={index < activeStars}
      {...rest}
    >
      <FiStar />
    </StarButton>
  ));

  return (
    <Container>
      {stars}
    </Container>
  );
}
