import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListContext } from '../context/ListContext'

import '../sass/styles.sass'

export const Home = () => {


  const context = useContext(ListContext)
  const { state , dispatch } = context
  console.log(state)


  return (
    <div className='book-page'>

      <h2 className="title"> Confira seus livros Adicionados !</h2>
      <div className="book-list">
          <ul className='book-list-items'>
             <li> ID </li>
             <li> Nome</li>
             <li> Autor </li>
             <li> Ação </li>
          </ul>
      </div>
      {state.length <= 0 && (
        <>
          <h1 style={{color: '#7b7b7b'}}> Voce ainda não adicionou nenhum livro na lista  </h1>
          <Link className='link-book' to="/books"> Adicionar </Link>
        </>
      )}
      {state && state.map((book , id) => (
        <>
               <div key={id} className="book-info">
            <p> {book.id} </p>
            <p> {book.title} </p>
            <p> {book.autor} </p>
            <div className='book-info-buttons'>
            <button onClick={() => dispatch({type: 'REMOVE' , id: book.id})}> Remove </button>
            </div>   
        </div>
        </>
      ))}
      {state.length !== 0 && (
          <div>
          <button onClick={() => dispatch({type: 'ALL'})}> Remove All </button>
        </div>
      )}
     
    </div>
  )
}
