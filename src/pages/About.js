import React from 'react'

import '../sass/styles.sass'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='about'>
      <h1> Sobre o Projeto </h1>
      <h4> Este projeto foi criado com o intuito <br/>
        de melhorar minhas habilidades com React.js
      </h4> 

      <ul className='about-list'>
        <li disabled> Tecnologias Utilizadas : </li>
        <li> React.js </li>
        <li> Context API </li>
        <li> SASS </li>
        <li> React Hooks </li>
      </ul>

      <Link className='about-link' to="/books"> Adicione seu livro </Link>
    </div>
  )
}
