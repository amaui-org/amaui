import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharpW700'
      short_name='Flag'

      {...props}
    >
      <path d="M4.15 21.85V3.15H14.7L15.1 5.15H20.85V16.85H12.3L11.9 14.85H7.3V21.85ZM12.5 10ZM14.925 13.7H17.7V8.3H12.475L12.075 6.3H7.3V11.7H14.525Z"/>
    </Icon>
  )
});

export default IconMaterialFlagSharpW700;
