import React, { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";
import { useNavigate } from "react-router-dom";

import "../sass/styles.sass";

export const Books = () => {
  const [titleBook, setTitleBook] = useState("");
  const [titleAutor, setTitleAutor] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  const navigate = useNavigate();

  const context = useContext(ListContext);
  const { dispatch } = context;

  function handleSubmit(e) {
    e.preventDefault();

    if (titleBook === "" || titleAutor === "" ) {
      return setError(" informe um valor válido ");
    }

    const date = {
      title: titleBook,
      autor: titleAutor,
      desc: desc,
      id: generateRandom(10, 100),
    };

    console.log(date);

    dispatch({ type: "ADD", payload: date });

    setTitleAutor("");
    setTitleBook("");

    setSucces(" Livro Adicionado !");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  function generateRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
  }
  return (
    <div className="list">
      <h1 className="list-title"> Adicione na sua lista de livros </h1>
      <hr />

      {error && <p className="error"> {error} </p>}
      {success && <p className="sucess"> {success} </p>}

      <form className="list-form" onSubmit={handleSubmit}>
        <label>
          Titulo
          <input
            className="list-form-title"
            value={titleBook}
            type="text"
            placeholder="titulo do livro"
            onChange={(e) => setTitleBook(e.target.value)}
            required
          />
        </label>
        <label>
          Autor
          <input
            className="list-form-autor"
            type="text"
            placeholder="autor do livro"
            value={titleAutor}
            onChange={(e) => setTitleAutor(e.target.value)}
            required
          />
        </label>
        <label>
          Descrição ( Opcional )
          <textarea
            placeholder="informe uma descrição"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <button className="list-form-button"> Adicionar </button>
      </form>
    </div>
  );
};
