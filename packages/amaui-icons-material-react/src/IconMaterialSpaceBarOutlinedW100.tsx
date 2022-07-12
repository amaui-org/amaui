import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarOutlinedW100'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M5.3 13.7V9H6V13H18V9H18.7V13.7Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceBarOutlinedW100;
