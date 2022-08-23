import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopScreenShareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareSharpFilled'
      short_name='StopScreenShare'

      {...props}
    >
      <path d="M20.85 18 14.425 11.575 16 10 13 7V9H11.85L5.85 3H22V18ZM20.5 23.3 18.2 21H1V19H16.175L15.175 18H2V4.85L0.7 3.5L2.1 2.1L21.9 21.9ZM8 14H10V12.85L8 10.825Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareSharpFilled.displayName = 'AmauiIconMaterialStopScreenShareSharpFilled';

export default IconMaterialStopScreenShareSharpFilled;
