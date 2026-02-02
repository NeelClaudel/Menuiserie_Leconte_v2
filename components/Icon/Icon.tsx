import React from 'react';

export type IconName =
  | 'motorisation'
  | 'store-banne'
  | 'portail'
  | 'cloture'
  | 'interphonie'
  | 'garage'
  | 'volet'
  | 'terrasse'
  | 'pergola'
  | 'ouverture'
  | 'carport';

interface IconProps {
  name: IconName | string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size 
}) => {
  const sizeClass = size ? `w-${size} h-${size}` : '';
  const finalClassName = `${sizeClass} ${className}`.trim();

  return (
    <svg className={finalClassName || 'w-6 h-6'}>
      <use href={`/images/icons/menuiserie-icons.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;