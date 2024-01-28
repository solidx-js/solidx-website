import React from 'react';

export interface IImageProps {
  className?: string;
  style?: React.CSSProperties;
  img: string;
}

export const Image = ({ className, style, img }: IImageProps) => {
  return <img className={className} style={style} src={img} />;
};
