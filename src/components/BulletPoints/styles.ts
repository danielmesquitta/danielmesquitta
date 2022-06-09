import styled from 'styled-components';

const Container = styled.ul`
  margin-bottom: 20px;

  > li {
    position: relative;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray._300};

    span {
      position: absolute;
      top: 8px;
      left: -15px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray._200};
    }
  }
`;

export default Container;
