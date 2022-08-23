import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHvacSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HvacSharpFilled'
      short_name='Hvac'

      {...props}
    >
      <path d="M3 21V3H21V21ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18ZM8.05 11.5Q8.1 11.075 8.225 10.712Q8.35 10.35 8.55 10H15.45Q15.65 10.35 15.775 10.712Q15.9 11.075 15.95 11.5ZM8.55 14Q8.35 13.65 8.225 13.287Q8.1 12.925 8.05 12.5H15.95Q15.9 12.925 15.775 13.287Q15.65 13.65 15.45 14ZM12 16Q11.25 16 10.575 15.725Q9.9 15.45 9.375 15H14.625Q14.1 15.45 13.425 15.725Q12.75 16 12 16ZM9.375 9Q9.9 8.55 10.575 8.275Q11.25 8 12 8Q12.75 8 13.425 8.275Q14.1 8.55 14.625 9Z"/>
    </Icon>
  );
});

IconMaterialHvacSharpFilled.displayName = 'AmauiIconMaterialHvacSharpFilled';

export default IconMaterialHvacSharpFilled;
