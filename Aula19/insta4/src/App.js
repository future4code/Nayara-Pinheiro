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
  state = {
    postagem: [
      {
        nomeUsuario:'Nayara',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Dara',
        fotoUsuario:'https://picsum.photos/id/237/200/300',
        fotoPost:'https://picsum.photos/seed/picsum/200/300'
      },
      {
        nomeUsuario:'Lívia',
        fotoUsuario: 'https://picsum.photos/200/300?grayscale',
        fotoPost: 'https://picsum.photos/200/300/?blur=2'
      }

    ]
  }



  render() {

    const listaDePostagem = this.state.postagem.map((postagem) => {
        return (
          <Post
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario= {postagem.fotoUsuario}
          fotoPost={postagem.fotoUsuario}
        />
        );
    });

    return (
      <MainContainer>
       {listaDePostagem}
      </MainContainer>
    );
  }
}

export default App;

