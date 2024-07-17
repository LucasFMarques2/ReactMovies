import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: none;

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
    opacity: 0.5;
  }

    font-size: 16px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;


`