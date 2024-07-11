import Image from 'next/image';
import React from 'react';

type IconProps = Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> & {
  iconName: string;
  mode?:string
};

export default function Icon({ iconName, width = 80, height = 80,mode='original', ...props }: IconProps) {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
  const url = `${baseUrl}/${iconName}/${iconName}-${mode}.svg`;
  const altText = `${iconName} icon`;

  return (
    <Image 
      src={url}
      width={width}
      height={height}
      alt={altText}
      {...props}
    />
  );
}
