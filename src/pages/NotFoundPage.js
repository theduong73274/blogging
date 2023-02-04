import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};
  color: white;

  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }

  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .description {
    max-width: 800px;
    margin: 0 auto 40px;
    line-height: 1.8;
  }

  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    cursor: pointer;

    border-radius: 8px;
    font-weight: 500;
    background-image: linear-gradient(
      to right top,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
  }

  .image {
    max-width: 250px;
    margin: 0 auto 40px;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <img srcSet="/404.png 2x" alt="notfound" className="image" />
        <h1 className="heading">404 - Looks like you're lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>

        <button onClick={() => navigate("/")} className="back">
          Go back
        </button>
      </div>
    </PageNotFoundStyles>
  );
};

export default NotFoundPage;
