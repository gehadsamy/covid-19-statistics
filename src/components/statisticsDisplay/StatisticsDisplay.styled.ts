import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
  height: fit-content;
  gap: 2rem;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      width: 30%;
      font-weight: 600;
      span {
        color: rgb(20 184 166);
      }
    }
  }
`;