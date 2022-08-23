import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberNewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewSharp'
      short_name='FiberNew'

      {...props}
    >
      <path d="M3.5 15H4.75V11.5L7.3 15H8.5V9H7.25V12.5L4.75 9H3.5ZM9.5 15H13.5V13.75H11V12.65H13.5V11.4H11V10.25H13.5V9H9.5ZM14.5 15H20.5V9H19.25V13.5H18.15V10H16.9V13.5H15.75V9H14.5ZM1 20V4H23V20ZM3 18H21V6H3ZM3 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialFiberNewSharp.displayName = 'AmauiIconMaterialFiberNewSharp';

export default IconMaterialFiberNewSharp;
