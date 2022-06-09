import styled from 'styled-components';

const Container = styled.h3`
  position: relative;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;

  span {
    display: block;
    background-color: ${({ theme }) => theme.colors.gray._000};
    border: 1px solid ${({ theme }) => theme.colors.primary._100};
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -30px;
    width: 10px;
    height: 10px;
  }
`;

export default Container;
