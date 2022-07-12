import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharpW100Filled'
      short_name='Flag'

      {...props}
    >
      <path d="M6.3 20.35V5.3H12.95L13.35 7.3H18.7V14.7H14.05L13.65 12.7H7V20.35Z"/>
    </Icon>
  )
});

export default IconMaterialFlagSharpW100Filled;
