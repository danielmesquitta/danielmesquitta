import styled from 'styled-components';

const Container = styled.h4`
  position: relative;
  margin-top: 12px;
  font-size: ${({ theme }) => theme.typography.size.caption};
  text-transform: uppercase;

  hr {
    position: absolute;
    border: 0;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    border-top: 1px solid ${({ theme }) => theme.colors.gray._200};
    width: 20px;
  }
`;

export default Container;
