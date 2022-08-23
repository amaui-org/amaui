import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopScreenShareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareSharp'
      short_name='StopScreenShare'

      {...props}
    >
      <path d="M14.425 11.575 11.85 9H13V7L16 10ZM20.85 18 18.85 16H20V5H7.85L5.85 3H22V18ZM20.5 23.3 18.2 21H1V19H16.175L15.175 18H2V4.85L0.7 3.5L2.1 2.1L21.9 21.9ZM10 12.85V14H8V10.825L4 6.825V16H13.15ZM12 10.5ZM8.575 11.4Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareSharp.displayName = 'AmauiIconMaterialStopScreenShareSharp';

export default IconMaterialStopScreenShareSharp;
