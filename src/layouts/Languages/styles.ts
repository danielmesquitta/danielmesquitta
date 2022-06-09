import styled from 'styled-components';

const Container = styled.section`
  padding: 40px 16px 20px;

  > h2 {
    text-transform: uppercase;
    text-align: center;
  }

  > ul {
    padding: 10px 0;

    > li {
      display: flex;
      align-items: center;
      padding: 8px 0;

      > img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
`;

export default Container;
