import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharpW700'
      short_name='Send'

      {...props}
    >
      <path d="M2.225 20.8V3.2L23 12ZM5 16.625 15.925 12 5 7.375V10.125L11.375 12L5 13.875ZM5 16.625V12V7.375V10.125V13.875Z"/>
    </Icon>
  )
});

export default IconMaterialSendSharpW700;
