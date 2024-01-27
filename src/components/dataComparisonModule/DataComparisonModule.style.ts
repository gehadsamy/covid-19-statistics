import styled from "styled-components";

export const ComparisonModuleContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
`;

export const Dropdown = styled.div`
  /* Your company-specific styling for the dropdown */
  margin-bottom: 20px;
  max-width: 40vw;
  @media screen and (max-width: 600px) {
    max-width: 60vw;

  }

`;

export const OptionLabel = styled.div`
  /* Your company-specific styling for the option label */
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
    justify-content: space-between;
`;

export const CheckboxWrapper = styled.div`
  /* Your company-specific styling for the checkbox wrapper */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  max-height: 20vh;
  overflow-y: auto;
`;

export const Checkbox = styled.input`
  /* Your company-specific styling for the checkbox */
  margin-right: 5px;
`;
