import styled from 'styled-components';
import Button from '../Button'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: felx;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  display: flex;
  border-radius: 50%;
  width: 49px;
  height: 49px;
  background: var(--gray);
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;