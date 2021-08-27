import React from 'react';
import "./styles.css"

export interface CardProps {
  children: any;
}

const Card: React.SFC<CardProps> = ({ children }) => {
  return <div className="Card">{children}</div>;
};

export default Card;
