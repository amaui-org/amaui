import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid3x3RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3RoundedW100Filled'
      short_name='Grid3x3'

      {...props}
    >
      <path d="M9.65 18.7Q9.5 18.7 9.4 18.6Q9.3 18.5 9.3 18.35V14.7H5.65Q5.5 14.7 5.4 14.6Q5.3 14.5 5.3 14.35Q5.3 14.2 5.4 14.1Q5.5 14 5.65 14H9.3V10H5.65Q5.5 10 5.4 9.9Q5.3 9.8 5.3 9.65Q5.3 9.5 5.4 9.4Q5.5 9.3 5.65 9.3H9.3V5.65Q9.3 5.5 9.4 5.4Q9.5 5.3 9.65 5.3Q9.8 5.3 9.9 5.4Q10 5.5 10 5.65V9.3H14V5.65Q14 5.5 14.1 5.4Q14.2 5.3 14.35 5.3Q14.5 5.3 14.6 5.4Q14.7 5.5 14.7 5.65V9.3H18.35Q18.5 9.3 18.6 9.4Q18.7 9.5 18.7 9.65Q18.7 9.8 18.6 9.9Q18.5 10 18.35 10H14.7V14H18.35Q18.5 14 18.6 14.1Q18.7 14.2 18.7 14.35Q18.7 14.5 18.6 14.6Q18.5 14.7 18.35 14.7H14.7V18.35Q14.7 18.5 14.6 18.6Q14.5 18.7 14.35 18.7Q14.2 18.7 14.1 18.6Q14 18.5 14 18.35V14.7H10V18.35Q10 18.5 9.9 18.6Q9.8 18.7 9.65 18.7ZM10 14H14V10H10Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3RoundedW100Filled.displayName = 'AmauiIconMaterialGrid3x3RoundedW100Filled';

export default IconMaterialGrid3x3RoundedW100Filled;
