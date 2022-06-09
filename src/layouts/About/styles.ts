import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 40px 16px;

  > img {
    width: 62px;
    height: 62px;
    margin-right: 12px;
  }

  > p {
    line-height: ${({ theme }) => theme.typography.lineHeight._100};
  }
`;

export default Container;
