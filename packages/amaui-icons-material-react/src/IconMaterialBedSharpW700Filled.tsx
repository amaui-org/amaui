import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedSharpW700Filled'
      short_name='Bed'

      {...props}
    >
      <path d="M1.15 20.35V11H2.15V4.65H21.85V11H22.85V20.35H19.7V18.35H4.3V20.35ZM13 10.5H18.7V7.8H13ZM5.3 10.5H11V7.8H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialBedSharpW700Filled;
