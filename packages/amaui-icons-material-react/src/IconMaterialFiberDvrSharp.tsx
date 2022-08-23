import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberDvrSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvrSharp'
      short_name='FiberDvr'

      {...props}
    >
      <path d="M15 15H16.5V13H17.65L18.5 15H20L19.1 12.9H20V9H15ZM16.5 11.5V10.5H18.5V11.5ZM11.1 15H12.6L14.35 9H12.85L11.85 12.45L10.85 9H9.35ZM4 15H7.5Q8.15 15 8.575 14.575Q9 14.15 9 13.5V10.5Q9 9.85 8.575 9.425Q8.15 9 7.5 9H4ZM5.5 13.5V10.5H7.5Q7.5 10.5 7.5 10.5Q7.5 10.5 7.5 10.5V13.5Q7.5 13.5 7.5 13.5Q7.5 13.5 7.5 13.5ZM1 20V4H23V20ZM3 18H21V6H3ZM3 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialFiberDvrSharp.displayName = 'AmauiIconMaterialFiberDvrSharp';

export default IconMaterialFiberDvrSharp;
