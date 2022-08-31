import { useState, useEffect} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

const ProjectForm = ({btnText}) => {

const [categories, setCategories] = useState([])


//  O useEffect serve para trazer a requisição uma vez apenas
useEffect(()=>{

  // O fetch é usado para pegar "GET" os dados do banco de dados
  // then resp => resp.json transforma os dados em json
  // then data => setCategories vira data e elas são trocadas
  
fetch("http://localhost:5000/categories", {
  method: "GET",
  headers:{
    'Content-Type' : 'aplication/json'
  }
}).then((resp)=> resp.json())
  .then((data)=>{
    setCategories(data)
  })
  .catch((err)=> console.log(err))

}, [])

  return (
   <form className={styles.form}>
        <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" 
        />
         <Input 
         
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total" 
        />

        <Select  name="category_id" 
        text="Selecione a categoria"
        options={categories}
        />

       <SubmitButton text={btnText}/>

   </form>

  )
}

export default ProjectForm