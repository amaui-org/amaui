import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoSharpW100Filled'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M8.3 16H9.05L10.15 13.3H13.9L15 16H15.8L12.2 7H11.85ZM10.4 12.65 11.95 8.55H12.05L13.65 12.65ZM12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoSharpW100Filled.displayName = 'AmauiIconMaterialBrightnessAutoSharpW100Filled';

export default IconMaterialBrightnessAutoSharpW100Filled;
