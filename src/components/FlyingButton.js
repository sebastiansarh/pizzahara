import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(calc(95vw - 50px), -95vh) scale(0.5);
  }
`;

const FlyingItem = styled.div`
  position: absolute;
  animation: ₱{({ fly }) => (fly ? fly + ' 1s forwards' : 'none')};
  img {
    width: 50px;
    height: 50px;
  }
`;

export default function FlyingButton({ targetTop, targetLeft, src, children }) {
  const [fly, setFly] = useState(false);

  const handleClick = () => {
    setFly(true);
    setTimeout(() => {
      setFly(false);
    }, 1000);
  };

  return (
    <FlyingItem fly={fly} onClick={handleClick}>
      <img src={src} alt="flying item" />
      {children}
    </FlyingItem>
  );
}
