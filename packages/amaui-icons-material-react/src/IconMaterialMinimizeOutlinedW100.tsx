import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeOutlinedW100'
      short_name='Minimize'

      {...props}
    >
      <path d="M6.65 20.35V19.65H17.35V20.35Z"/>
    </Icon>
  )
});

export default IconMaterialMinimizeOutlinedW100;
