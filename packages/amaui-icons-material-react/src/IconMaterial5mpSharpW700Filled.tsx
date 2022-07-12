import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5mpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5mpSharpW700Filled'
      short_name='5mp'

      {...props}
    >
      <path d="M10 11.8H14.5V8.3H11.5V7.3H14.5V5.8H10V9.3H13V10.3H10ZM2.15 21.85V2.15H21.85V21.85ZM6 18.2H7.5V14H8.5V16.875H10V14H11V18.2H12.5V12.5H6ZM13.5 18.2H15V16.85H18V12.5H13.5ZM15 14H16.5V15.35H15Z"/>
    </Icon>
  )
});

export default IconMaterial5mpSharpW700Filled;
