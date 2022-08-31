import{ useHistory, useNavigate } from 'react-router-dom'

import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

const NewProject = () => {

  const navigate = useNavigate()
  
  function createPost (project){

    // iniciando custo(cost) e serviços(service)
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),

    }) .then((resp => resp.json ())
        .then((data)=> {
          console.log(data)
         //redirect
         navigate.push('/projects', {message: 'Projeto criado com sucesso!'})
            })
    ).catch(err => console.log(err))

  }


  return (
    <div className={styles.newproject_container}>
        <h1>Criar projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>

    </div>
  )
}

export default NewProject