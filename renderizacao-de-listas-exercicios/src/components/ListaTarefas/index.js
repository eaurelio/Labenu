import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React", 'Apresentar exercício']);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaConcluida, setTarefaConcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
  };

  const adicionaTarefaEnter = (e) => {
    if(e.keyCode === 13) {
      adicionaTarefa()
    }
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
  };

  const concluiTarefa = (tarefa) => {
    lista.map((item) => {
      if(item === tarefa) {
        setTarefaConcluida([...tarefaConcluida, item])
      }
      removeTarefa(tarefa)
    })
  }


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyUp={adicionaTarefaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <h4>Tarefas pendentes</h4>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa onDoubleClick={() => concluiTarefa(tarefa)} key={index} >
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>

      <LinhaHorizontal/>

      <ListaContainer>
        <h4>Tarefas Concluídas</h4>
        <ul>
          {tarefaConcluida.map((tarefa, index) => {
            return (
              <Tarefa key={index} >
                <p className={"dashed"}>{tarefa}</p>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
