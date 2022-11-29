import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(['Tarefa 1', 'Tarefa 2', 'Tarefa 3'])

  // const [tarefas, setTarefas] = useState([])


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const setItem = [...lista, novaTarefa]
    setLista(setItem)
    setNovaTarefa('')
    // console.log(tarefas)
  };

  // const removeTarefa = (e) => {
  //   const target = e.currentTarget.parentNode.parentNode.innerText
  //   const setItem = lista.filter(e => e !== target )
  //   setLista(setItem)
  // };

  const removeTarefa = (e) => {
    const removeItem = lista.filter((task) => task !== e)
    setLista(removeItem)
  };

  const listaTarefa = lista.map((e, i) => {
    return (
      <ul key={i}>
        <Tarefa>
          <p>{e}</p>
          <RemoveButton onClick={() => removeTarefa(e)}>
            <img src={bin} alt="" width="16px" />
          </RemoveButton>
        </Tarefa>
      </ul>
    )
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        {listaTarefa}
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
