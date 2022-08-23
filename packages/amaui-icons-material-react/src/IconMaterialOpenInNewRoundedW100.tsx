import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewRoundedW100'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H10.65Q10.8 4.3 10.9 4.4Q11 4.5 11 4.65Q11 4.8 10.9 4.9Q10.8 5 10.65 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V13.35Q19 13.2 19.1 13.1Q19.2 13 19.35 13Q19.5 13 19.6 13.1Q19.7 13.2 19.7 13.35V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM9.5 14.5Q9.375 14.375 9.375 14.25Q9.375 14.125 9.5 14L18.5 5H14.35Q14.2 5 14.1 4.9Q14 4.8 14 4.65Q14 4.5 14.1 4.4Q14.2 4.3 14.35 4.3H18.95Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5.05V9.65Q19.7 9.8 19.6 9.9Q19.5 10 19.35 10Q19.2 10 19.1 9.9Q19 9.8 19 9.65V5.5L9.975 14.525Q9.875 14.625 9.75 14.625Q9.625 14.625 9.5 14.5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewRoundedW100.displayName = 'AmauiIconMaterialOpenInNewRoundedW100';

export default IconMaterialOpenInNewRoundedW100;
