import styled from 'styled-components';

// background-color: ${({ theme }) => theme.colors.primary};
      
// &[data-status="SUCCESS"] {
//   background-color: ${({ theme }) => theme.colors.success};
// }
// &[data-status="ERROR"] {
//   background-color: ${({ theme }) => theme.colors.wrong};

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {

      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;