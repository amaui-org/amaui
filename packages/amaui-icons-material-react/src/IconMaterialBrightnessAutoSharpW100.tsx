import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoSharpW100'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M8.3 16H9.05L10.15 13.3H13.9L15 16H15.8L12.2 7H11.85ZM10.4 12.65 11.95 8.55H12.05L13.65 12.65ZM12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8ZM12 12ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoSharpW100.displayName = 'AmauiIconMaterialBrightnessAutoSharpW100';

export default IconMaterialBrightnessAutoSharpW100;
