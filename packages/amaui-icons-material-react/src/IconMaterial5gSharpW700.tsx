import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5gSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gSharpW700'
      short_name='5g'

      {...props}
    >
      <path d="M2.625 17V14.225H7.425V13.2H2.625V7H10.2V9.775H5.375V10.8H10.2V17ZM11.8 17V7H21.375V9.775H14.575V14.225H18.625V13.35H16.5V10.95H21.375V17Z"/>
    </Icon>
  )
});

export default IconMaterial5gSharpW700;
