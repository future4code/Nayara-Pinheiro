import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Nayara'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Dara'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/seed/picsum/200/300'}
        />
        <Post
          nomeUsuario={'Lívia'}
          fotoUsuario={'https://picsum.photos/200/300?grayscale'}
          fotoPost={'https://picsum.photos/200/300/?blur=2'}
        />
      </MainContainer>
    );
  }
}

export default App;

