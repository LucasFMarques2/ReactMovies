import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const StarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 20px;
    margin-right: 5px;
    color: ${({ theme, $isactive }) =>
      $isactive ? theme.COLORS.PINK : theme.COLORS.WHITE};
    fill: ${({ theme, $isactive }) =>
      $isactive ? theme.COLORS.PINK : theme.COLORS.WHITE};
  }
`;
