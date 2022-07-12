import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputSharpW100Filled'
      short_name='Output'

      {...props}
    >
      <path d="M3.65 19.85V4.15H19.35V6.85H18.65V4.85H4.35V19.15H18.65V17.15H19.35V19.85ZM16 16.075 15.525 15.6 18.725 12.35H9.65V11.65H18.725L15.525 8.4L16 7.925L20.075 12Z"/>
    </Icon>
  )
});

export default IconMaterialOutputSharpW100Filled;
