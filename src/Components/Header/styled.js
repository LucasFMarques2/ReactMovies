import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 115px;
  width: 100%;
  
  display: flex;
  align-items: center;
  padding: 30px 123px;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
 

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 64px;
    font-size: 24px;
    font-weight: 800;
  }

  > img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Profile = styled.div`
  height: 68px;
  width: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
 
  >div{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: end;

    a{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

`;
