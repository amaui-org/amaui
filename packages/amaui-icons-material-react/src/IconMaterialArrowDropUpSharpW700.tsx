import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpSharpW700'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M5.625 14.575 12 8.2 18.375 14.575Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpSharpW700;
