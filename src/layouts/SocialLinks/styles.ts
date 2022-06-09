import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  > a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.typography.size.caption};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray._200};
    margin: 0 16px 16px;

    span {
      &:first-of-type {
        position: relative;
        top: 2px;
        padding: 6px;
        padding-left: 0;
        border-right: 1px solid ${({ theme }) => theme.colors.gray._200};
      }

      &:last-of-type {
        padding-left: 12px;
      }
    }
  }
`;

export default Container;
