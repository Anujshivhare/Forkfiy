import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Results from "../components/Results/Results";
import { useParams } from "react-router-dom";
import Message from "../components/UI/Message";

function Home() {
  const { id } = useParams();

  return (
    <div className="container">
      <Header></Header>
      <Results></Results>
      {id ? (
        <Outlet></Outlet>
      ) : (
        <div className="recipe">
          <Message message="Start by searching for a recipe or an ingredient. Have fun!" />
        </div>
      )}
    </div>
  );
}

export default Home;
