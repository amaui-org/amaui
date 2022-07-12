import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharpW100Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M3.3 16.7V7.3H7.65V11H8.35V7.3H11.65V11H12.35V7.3H15.65V11H16.35V7.3H20.7V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenSharpW100Filled;
