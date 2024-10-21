// src/components/SkillItem.tsx

import React from 'react';
import { IconType } from 'react-icons';

interface SkillItemProps {
  Icon: IconType;
  label: string;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ Icon, label, color }) => {
  return (
    <div className='flex flex-col items-center  transition-transform duration-300'>
      <Icon
        className={`h-[8vh] w-[8vw] xl:h-[7vh] xl:w-[7vw] ${color} transition-transform duration-300 hover:scale-110`}
        aria-hidden='true'
      />
      <span className='mt-2 '>{label}</span>
    </div>
  );
};

export default SkillItem;