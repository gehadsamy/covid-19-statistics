import styled from "styled-components";

export const ComparisonModuleContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
`;

export const Dropdown = styled.div`
  margin-bottom: 20px;
  max-width: 40vw;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  @media screen and (max-width: 600px) {
    max-width: 60vw;
  }
`;

export const OptionLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
    justify-content: space-between;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  max-height: 20vh;
  overflow-y: auto;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;
