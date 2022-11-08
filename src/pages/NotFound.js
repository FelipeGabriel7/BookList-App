import React from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2em auto',
    gap: '2rem'
}

const button = {
    padding: '0.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    color: '#eee',
    background: '#07108a',
    fontWeight: 'bold',
    cursor: 'pointer'
}

export const NotFound = () => {

  const navigate = useNavigate();

  function handleReturn(){
    alert(" Retornando ");

    setTimeout(() => {
      navigate("/")
    }, 1500);
  }

  return (
    <div style={{...styles}}>
      <h1> Desculpe mais essa página não existe </h1>
      <h2> 404 NOT FOUND</h2>
      <button style={{...button}} onClick={() => handleReturn()}> Retornar </button>
    </div>
  )
}
