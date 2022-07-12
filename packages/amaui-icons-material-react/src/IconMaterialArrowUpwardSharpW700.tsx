import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardSharpW700'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M10.425 20.375V9.675L5.85 14.25L3.625 12L12 3.625L20.375 12L18.15 14.25L13.575 9.675V20.375Z"/>
    </Icon>
  )
});

export default IconMaterialArrowUpwardSharpW700;
