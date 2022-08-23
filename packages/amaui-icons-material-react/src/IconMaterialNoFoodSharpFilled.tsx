import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodSharpFilled'
      short_name='NoFood'

      {...props}
    >
      <path d="M20.475 23.3 12.175 15H1Q1 12.825 2.45 11.287Q3.9 9.75 6.4 9.225L0.675 3.5L2.1 2.075L21.9 21.875ZM1 23V21H16V23ZM1 19V17H16V19ZM21.625 18.75 11.45 8.6 11 5H16V1H18V5H23Z"/>
    </Icon>
  );
});

IconMaterialNoFoodSharpFilled.displayName = 'AmauiIconMaterialNoFoodSharpFilled';

export default IconMaterialNoFoodSharpFilled;
