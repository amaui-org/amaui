import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter4RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4RoundedW100Filled'
      short_name='Filter4'

      {...props}
    >
      <path d="M15.35 14.35Q15.5 14.35 15.6 14.25Q15.7 14.15 15.7 14V5.975Q15.7 5.85 15.6 5.75Q15.5 5.65 15.35 5.65Q15.2 5.65 15.1 5.75Q15 5.85 15 6V9.65H11.7V5.975Q11.7 5.85 11.6 5.75Q11.5 5.65 11.35 5.65Q11.2 5.65 11.1 5.75Q11 5.85 11 6V10Q11 10.15 11.1 10.25Q11.2 10.35 11.35 10.35H15V14.025Q15 14.15 15.1 14.25Q15.2 14.35 15.35 14.35ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V7.125Q3.95 7 4.05 6.9Q4.15 6.8 4.3 6.8Q4.45 6.8 4.55 6.9Q4.65 7 4.65 7.15V17.9Q4.65 18.25 4.875 18.475Q5.1 18.7 5.45 18.7H16.225Q16.35 18.7 16.45 18.8Q16.55 18.9 16.55 19.05Q16.55 19.2 16.45 19.3Q16.35 19.4 16.2 19.4Z"/>
    </Icon>
  );
});

IconMaterialFilter4RoundedW100Filled.displayName = 'AmauiIconMaterialFilter4RoundedW100Filled';

export default IconMaterialFilter4RoundedW100Filled;
