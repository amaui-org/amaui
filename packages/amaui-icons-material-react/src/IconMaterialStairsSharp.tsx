import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsSharp'
      short_name='Stairs'

      {...props}
    >
      <path d="M6 18H10.425V14.675H13V11.35H15.575V8H18V6H13.575V9.325H11V12.65H8.425V16H6ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialStairsSharp;
