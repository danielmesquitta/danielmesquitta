import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  padding: 30px 0 40px;
  margin-bottom: 0px;

  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    > span {
      &:first-of-type {
        font-size: ${({ theme }) => theme.typography.size.h1};
      }

      &:last-of-type {
        font-size: ${({ theme }) => theme.typography.size.p};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        color: ${({ theme }) => theme.colors.gray._300};
      }
    }

    hr {
      width: 100px;
      border: 0;
      margin: 16px auto;
      border-top: 2px solid ${({ theme }) => theme.colors.gray._200};
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top: 16px solid ${({ theme }) => theme.colors.gray._200};
    border-left-width: 260px;
    border-right-width: 0;
    transform: translateY(100%);
  }
`;

export default Container;
