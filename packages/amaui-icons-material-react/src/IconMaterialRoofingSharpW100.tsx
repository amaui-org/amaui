import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingSharpW100'
      short_name='Roofing'

      {...props}
    >
      <path d="M5.4 10.7 12 4.75 15.8 8.2V6H17V9.25L18.6 10.7H17.55L12 5.7L6.45 10.7ZM9.9 18.7V14.25H14.1V18.7ZM10.6 18H13.4V14.95H10.6Z"/>
    </Icon>
  );
});

IconMaterialRoofingSharpW100.displayName = 'AmauiIconMaterialRoofingSharpW100';

export default IconMaterialRoofingSharpW100;
