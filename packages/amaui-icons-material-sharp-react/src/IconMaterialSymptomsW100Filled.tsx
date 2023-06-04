import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSymptomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SymptomsW100Filled'

      short_name='Symptoms'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M722.338 886Q677 886 646 854.5q-31-31.5-31-76.39 0-22.11 9-42.11t26-36l72-68 72 67.849Q810 715 819.5 735.5 829 756 829 778q-1 45-31.5 76.5T722.338 886ZM480 664q-45 0-76.5-31.5T372 556q0-45 31.5-76.5T480 448q45 0 76.5 31.5T588 556q0 45-31.5 76.5T480 664Zm-.407 140q-125.043 0-227.818-67.5T96 556q53-113 155.857-180.5t228-67.5Q605 308 708 375.5T864 556q-6 12.857-12.5 24.857T837 604L719 495 608 602q4-11 6-22.375T616 556q0-56.667-39.735-96.333Q536.529 420 479.765 420 423 420 383.5 459.735q-39.5 39.736-39.5 96.5Q344 613 383.667 652.5 423.333 692 480 692q16.744 0 32.372-3.5T542 677q-17 29-24.5 61.5t-1.5 64.529q-9 .971-17.993.971h-18.414Z"/>
    </Icon>
  );
});

IconMaterialSymptomsW100Filled.displayName = 'AmauiIconMaterialSymptomsW100Filled';

export default IconMaterialSymptomsW100Filled;
