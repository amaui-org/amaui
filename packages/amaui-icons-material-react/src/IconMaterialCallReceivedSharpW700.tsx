import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedSharpW700'
      short_name='CallReceived'

      {...props}
    >
      <path d="M4.2 19.8V8.65H7.35V14.45L18.375 3.425L20.575 5.625L9.55 16.65H15.35V19.8Z"/>
    </Icon>
  )
});

export default IconMaterialCallReceivedSharpW700;
