import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltSharp'
      short_name='ChairAlt'

      {...props}
    >
      <path d="M5 21V12H8V10H5V3H19V10H16V12H19V21H17V18H7V21ZM7 8H17V5H7ZM10 12H14V10H10ZM7 16H17V14H7ZM7 8V5V8ZM7 16V14V16Z"/>
    </Icon>
  );
});

export default IconMaterialChairAltSharp;
