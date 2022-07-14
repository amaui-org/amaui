import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharpW100Filled'
      short_name='Send'

      {...props}
    >
      <path d="M4.3 18.05V13.15L9.5 12L4.3 10.85V5.95L18.65 12Z"/>
    </Icon>
  );
});

export default IconMaterialSendSharpW100Filled;
