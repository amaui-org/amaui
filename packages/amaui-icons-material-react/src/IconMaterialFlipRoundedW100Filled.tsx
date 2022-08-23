import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipRoundedW100Filled'
      short_name='Flip'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H9.3Q9.45 4.3 9.55 4.4Q9.65 4.5 9.65 4.65Q9.65 4.8 9.55 4.9Q9.45 5 9.3 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H9.3Q9.45 19 9.55 19.1Q9.65 19.2 9.65 19.35Q9.65 19.5 9.55 19.6Q9.45 19.7 9.3 19.7ZM12 23Q11.85 23 11.75 22.9Q11.65 22.8 11.65 22.65V1.85Q11.65 1.7 11.75 1.6Q11.85 1.5 12 1.5Q12.15 1.5 12.25 1.6Q12.35 1.7 12.35 1.85V22.65Q12.35 22.8 12.25 22.9Q12.15 23 12 23ZM19 5H18.475V4.3H19Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5V5.525H19ZM19 12.825V11.175H19.7V12.825ZM19 19.7H18.475V19H19V18.475H19.7V19Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM19 9.175V7.525H19.7V9.175ZM19 16.475V14.825H19.7V16.475ZM14.35 19.7V19H16.475V19.7ZM14.35 5V4.3H16.475V5Z"/>
    </Icon>
  );
});

IconMaterialFlipRoundedW100Filled.displayName = 'AmauiIconMaterialFlipRoundedW100Filled';

export default IconMaterialFlipRoundedW100Filled;
