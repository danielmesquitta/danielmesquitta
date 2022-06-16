import styled from 'styled-components';

const Container = styled.h2`
  margin-top: 35px;
  position: relative;
  color: ${({ theme }) => theme.colors.gray._200};
  font-size: ${({ theme }) => theme.typography.size.h2};
  font-weight: ${({ theme }) => theme.typography.weight.black};
  text-transform: uppercase;
  text-align: center;
  transform: translateY(-50%);

  hr {
    position: absolute;
    border: 0;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    border-top: 1px solid ${({ theme }) => theme.colors.gray._200};
    width: 100px;
  }
`;

export default Container;
