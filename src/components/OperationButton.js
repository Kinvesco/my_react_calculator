// src/components/OperationButton.js
import React from 'react';

function OperationButton({ dispatch, operationSymbol }) {
  const handleOperationClick = () => {
    dispatch({ type: 'choose-operation', payload: { operation: operationSymbol } });
  };

  return (
    <button onClick={handleOperationClick}>{operationSymbol}</button>
  );
}

export default OperationButton;