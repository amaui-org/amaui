import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1RoundedW100Filled'
      short_name='Filter1'

      {...props}
    >
      <path d="M14.35 14.35Q14.5 14.35 14.6 14.25Q14.7 14.15 14.7 14V6Q14.7 5.85 14.6 5.75Q14.5 5.65 14.35 5.65H12.325Q12.2 5.65 12.1 5.75Q12 5.85 12 6Q12 6.15 12.1 6.25Q12.2 6.35 12.35 6.35H14V14.025Q14 14.15 14.1 14.25Q14.2 14.35 14.35 14.35ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V7.125Q3.95 7 4.05 6.9Q4.15 6.8 4.3 6.8Q4.45 6.8 4.55 6.9Q4.65 7 4.65 7.15V17.9Q4.65 18.25 4.875 18.475Q5.1 18.7 5.45 18.7H16.225Q16.35 18.7 16.45 18.8Q16.55 18.9 16.55 19.05Q16.55 19.2 16.45 19.3Q16.35 19.4 16.2 19.4Z"/>
    </Icon>
  );
});

IconMaterialFilter1RoundedW100Filled.displayName = 'AmauiIconMaterialFilter1RoundedW100Filled';

export default IconMaterialFilter1RoundedW100Filled;
