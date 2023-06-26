"use client";
import { useState } from "react";

const OnClickAnimation = ({
  children,
  onClickProps,
  notOnClickProps,
  className,
  bgClassName,
}) => {
  const [animation, setAnimation] = useState(false);
  console.log(animation)
  return (
    <div
      onClick={() => {
        setAnimation(true)
      }}
      
      className={className}
    >
      <div
        onTransitionEnd={() => setAnimation(false)}
        className={`${
          animation ? onClickProps : notOnClickProps
        } ${bgClassName}`}
      />
      {children}
    </div>
  );
};

export default OnClickAnimation;
