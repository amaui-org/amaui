import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSharpFilled'
      short_name='Close'

      {...props}
    >
      <path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/>
    </Icon>
  )
});

export default IconMaterialCloseSharpFilled;
