import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoRoundedW100Filled'
      short_name='Volcano'

      {...props}
    >
      <path d="M4.95 18.6 6.45 15.2Q6.65 14.775 7.013 14.537Q7.375 14.3 7.825 14.3H9.875L11.5 10.25Q11.675 9.825 12.05 9.562Q12.425 9.3 12.9 9.3H15.9Q16.4 9.3 16.8 9.6Q17.2 9.9 17.325 10.4L19.725 18.8Q19.925 19.525 19.488 20.112Q19.05 20.7 18.3 20.7H6.3Q5.5 20.7 5.05 20.025Q4.6 19.35 4.95 18.6ZM14.15 5V3Q14.15 2.85 14.25 2.75Q14.35 2.65 14.5 2.65Q14.65 2.65 14.75 2.75Q14.85 2.85 14.85 3V5Q14.85 5.15 14.75 5.25Q14.65 5.35 14.5 5.35Q14.35 5.35 14.25 5.25Q14.15 5.15 14.15 5ZM18.275 6.725Q18.175 6.825 18.025 6.825Q17.875 6.825 17.775 6.725Q17.675 6.625 17.675 6.475Q17.675 6.325 17.775 6.225L19.225 4.8Q19.325 4.7 19.463 4.7Q19.6 4.7 19.7 4.8Q19.8 4.9 19.8 5.037Q19.8 5.175 19.7 5.275ZM10.725 6.725 9.3 5.275Q9.2 5.175 9.2 5.037Q9.2 4.9 9.3 4.8Q9.4 4.7 9.538 4.7Q9.675 4.7 9.775 4.8L11.225 6.225Q11.325 6.325 11.325 6.475Q11.325 6.625 11.225 6.725Q11.125 6.825 10.975 6.825Q10.825 6.825 10.725 6.725Z"/>
    </Icon>
  );
});

IconMaterialVolcanoRoundedW100Filled.displayName = 'AmauiIconMaterialVolcanoRoundedW100Filled';

export default IconMaterialVolcanoRoundedW100Filled;
