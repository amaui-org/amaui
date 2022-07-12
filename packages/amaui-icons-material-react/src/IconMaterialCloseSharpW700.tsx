import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSharpW700'
      short_name='Close'

      {...props}
    >
      <path d="M6.4 19.8 4.2 17.6 9.8 12 4.2 6.4 6.4 4.2 12 9.8 17.6 4.2 19.8 6.4 14.2 12 19.8 17.6 17.6 19.8 12 14.2Z"/>
    </Icon>
  )
});

export default IconMaterialCloseSharpW700;
