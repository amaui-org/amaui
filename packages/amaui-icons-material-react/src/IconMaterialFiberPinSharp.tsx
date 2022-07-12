import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberPinSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinSharp'
      short_name='FiberPin'

      {...props}
    >
      <path d="M14 15H15.25V11.5L17.8 15H19V9H17.75V12.5L15.25 9H14ZM11.25 15H12.75V9H11.25ZM5 15H6.5V13H10V9H5ZM6.5 11.5V10.5H8.5V11.5ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialFiberPinSharp;
