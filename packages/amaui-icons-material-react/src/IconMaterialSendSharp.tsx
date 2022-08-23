import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharp'
      short_name='Send'

      {...props}
    >
      <path d="M3 20V4L22 12ZM5 17 16.85 12 5 7V10.5L11 12L5 13.5ZM5 17V12V7V10.5V13.5Z"/>
    </Icon>
  );
});

IconMaterialSendSharp.displayName = 'AmauiIconMaterialSendSharp';

export default IconMaterialSendSharp;
