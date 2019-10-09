import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Hero = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#435',
})`
  margin: 50px 0;
`;

//color #FF6961
