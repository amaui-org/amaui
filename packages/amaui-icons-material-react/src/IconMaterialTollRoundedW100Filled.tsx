import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollRoundedW100Filled'
      short_name='Toll'

      {...props}
    >
      <path d="M15 18.7Q12.2 18.7 10.25 16.75Q8.3 14.8 8.3 12Q8.3 9.2 10.25 7.25Q12.2 5.3 15 5.3Q17.8 5.3 19.75 7.25Q21.7 9.2 21.7 12Q21.7 14.8 19.75 16.75Q17.8 18.7 15 18.7ZM6.5 18.25Q4.55 17.575 3.425 15.85Q2.3 14.125 2.3 12Q2.3 9.875 3.425 8.15Q4.55 6.425 6.5 5.75Q6.7 5.675 6.85 5.787Q7 5.9 7 6.125Q7 6.225 6.938 6.3Q6.875 6.375 6.775 6.425Q5.05 7.075 4.025 8.6Q3 10.125 3 12Q3 13.875 4.025 15.4Q5.05 16.925 6.775 17.575Q6.875 17.625 6.938 17.712Q7 17.8 7 17.9Q7 18.1 6.85 18.212Q6.7 18.325 6.5 18.25Z"/>
    </Icon>
  );
});

IconMaterialTollRoundedW100Filled.displayName = 'AmauiIconMaterialTollRoundedW100Filled';

export default IconMaterialTollRoundedW100Filled;
