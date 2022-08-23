import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodSharpW100Filled'
      short_name='NoFood'

      {...props}
    >
      <path d="M19.975 22.3 13.175 15.5H2.875Q2.875 13.8 4.763 12.8Q6.65 11.8 9.225 11.8H9.475L0.925 3.25L1.425 2.75L20.475 21.8ZM2.875 21.7V21H15.575V21.7ZM2.875 18.6V17.9H15.575V18.6ZM19.925 18.45 11.95 10.45 11.425 6.8H15.925V2.8H16.625V6.8H21.125Z"/>
    </Icon>
  );
});

IconMaterialNoFoodSharpW100Filled.displayName = 'AmauiIconMaterialNoFoodSharpW100Filled';

export default IconMaterialNoFoodSharpW100Filled;
