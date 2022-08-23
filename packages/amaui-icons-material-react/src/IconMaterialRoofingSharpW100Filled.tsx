import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingSharpW100Filled'
      short_name='Roofing'

      {...props}
    >
      <path d="M5.4 10.7 12 4.75 15.8 8.2V6H17V9.25L18.6 10.7H17.55L12 5.7L6.45 10.7ZM9.9 18.7V14.25H14.1V18.7ZM10.6 18H13.4V14.95H10.6Z"/>
    </Icon>
  );
});

IconMaterialRoofingSharpW100Filled.displayName = 'AmauiIconMaterialRoofingSharpW100Filled';

export default IconMaterialRoofingSharpW100Filled;
