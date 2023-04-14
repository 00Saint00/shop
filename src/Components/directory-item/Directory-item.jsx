import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryContainer } from "./Directory-style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <Body className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
