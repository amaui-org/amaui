import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthSharpW100Filled'
      short_name='North'

      {...props}
    >
      <path d="M11.65 20.6V4.475L6.325 9.8L5.85 9.325L12 3.175L18.15 9.325L17.675 9.825L12.35 4.5V20.6Z"/>
    </Icon>
  );
});

export default IconMaterialNorthSharpW100Filled;
