import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceSharp'
      short_name='HomeRepairService'

      {...props}
    >
      <path d="M2 20V8H7V4H17V8H22V20ZM4 18H20V15H18V16H16V15H8V16H6V15H4ZM4 10V13H6V12H8V13H16V12H18V13H20V10ZM9 8H15V6H9Z"/>
    </Icon>
  );
});

export default IconMaterialHomeRepairServiceSharp;
