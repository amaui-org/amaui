import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSharpW100'
      short_name='Close'

      {...props}
    >
      <path d="M6.4 18.1 5.9 17.6 11.5 12 5.9 6.4 6.4 5.9 12 11.5 17.6 5.9 18.1 6.4 12.5 12 18.1 17.6 17.6 18.1 12 12.5Z"/>
    </Icon>
  )
});

export default IconMaterialCloseSharpW100;
