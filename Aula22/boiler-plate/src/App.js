import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da tarefa',
          completa: true
        },
        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas");
    const tarefaConvertida = JSON.parse(localStorage.getItem("tarefas"));
  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
		console.log(event.target.value)
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaTarefaCriada = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaTarefaCriada})

    console.log(this.state.tarefas)

   }

  selectTarefa = (id) => {
    const tarefaSelecionada = this.state.tarefas.map((tarefas,id) => {
      if(tarefas === tarefas.id) {
        const novasTarefa = {
          ...tarefas,
          completa: !tarefas.completa,
        }
        return novasTarefa;
      }else{
        return tarefas;
      }
    })
      this.setState({tarefas: tarefaSelecionada})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
