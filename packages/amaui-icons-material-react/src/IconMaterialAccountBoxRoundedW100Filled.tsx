import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxRoundedW100Filled'
      short_name='AccountBox'

      {...props}
    >
      <path d="M5 18.35Q6.35 17.025 8.138 16.262Q9.925 15.5 12 15.5Q14.075 15.5 15.863 16.262Q17.65 17.025 19 18.35V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8ZM12 13.1Q10.8 13.1 9.975 12.275Q9.15 11.45 9.15 10.25Q9.15 9.05 9.975 8.225Q10.8 7.4 12 7.4Q13.2 7.4 14.025 8.225Q14.85 9.05 14.85 10.25Q14.85 11.45 14.025 12.275Q13.2 13.1 12 13.1ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxRoundedW100Filled.displayName = 'AmauiIconMaterialAccountBoxRoundedW100Filled';

export default IconMaterialAccountBoxRoundedW100Filled;
