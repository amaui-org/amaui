import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharpFilled'
      short_name='Send'

      {...props}
    >
      <path d="M3 20V14L11 12L3 10V4L22 12Z"/>
    </Icon>
  );
});

IconMaterialSendSharpFilled.displayName = 'AmauiIconMaterialSendSharpFilled';

export default IconMaterialSendSharpFilled;
