import styled from 'styled-components'

export const Container = styled.button`
    margin-top: 42px;
    margin-bottom: 24px;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.PINK};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    
    >svg{
      margin-right: 5px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
`