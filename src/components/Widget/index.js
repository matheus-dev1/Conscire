import styled from 'styled-components'

// border: 1px solid ${({ theme }) => theme.colors.secondary};

// background-color: ${({ theme }) =>{
//   return theme.colors.mainBg;
// }};
const Widget = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;
  
  
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

//   background-color: ${({ theme }) => theme.colors.primary};
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 32px;


  * {
    margin: 0;
  }  
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

// color: ${({ theme }) => theme.colors.contrastText};
// background-color: ${({ theme }) => `${theme.colors.primary}40`};


// border-radius: ${({ theme }) => theme.borderRadius};
Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;

  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;

