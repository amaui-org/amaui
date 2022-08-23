import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodSharp'
      short_name='NoFood'

      {...props}
    >
      <path d="M20.475 23.3 12.175 15H1Q1 12.825 2.45 11.287Q3.9 9.75 6.4 9.225L0.675 3.5L2.1 2.075L21.9 21.875ZM1 23V21H16V23ZM1 17H16V19H1ZM21.625 18.75 19.8 16.925 20.8 7H11.25L11 5H16V1H18V5H23ZM15.625 12.775ZM3.625 13H10.175L8.175 11Q8.175 11 8.213 11Q8.25 11 8.5 11Q7.45 11 5.95 11.412Q4.45 11.825 3.625 13ZM10.175 13Q10.175 13 10.175 13Q10.175 13 10.175 13Q10.175 13 10.175 13Q10.175 13 10.175 13Z"/>
    </Icon>
  );
});

IconMaterialNoFoodSharp.displayName = 'AmauiIconMaterialNoFoodSharp';

export default IconMaterialNoFoodSharp;
