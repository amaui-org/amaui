import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsSharpW700'
      short_name='Stairs'

      {...props}
    >
      <path d="M6 18H10.425V14.675H13V11.35H15.575V8H18V6H13.575V9.325H11V12.65H8.425V16H6ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialStairsSharpW700;
