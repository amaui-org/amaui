import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpSharpW100Filled'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M8.55 13.35 12 9.9 15.45 13.35Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpSharpW100Filled;
