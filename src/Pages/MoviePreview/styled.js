import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    margin-left: 120px;
    overflow-y: auto;

    div {
      display: flex;
      align-items: center;

      h1 {
        margin-right: 20px;
      }
    }

    div:nth-child(3) {
      margin: 24px 0 40px;
      img {
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
      }
      p {
        margin-right: 8px;
      }
      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 25px;
        margin-right: 8px;
      }
    }

    .text{
      margin-top: 40px;
    }
  }
`;
