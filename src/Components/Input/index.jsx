import { Container } from './styled';

export function Input({ placeholder, icon: Icon }) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <input placeholder={placeholder} />
    </Container>
  );
}
