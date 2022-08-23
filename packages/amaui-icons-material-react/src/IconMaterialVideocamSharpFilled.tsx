import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamSharpFilled'
      short_name='Videocam'

      {...props}
    >
      <path d="M2 20V4H18V10.5L22 6.5V17.5L18 13.5V20Z"/>
    </Icon>
  );
});

IconMaterialVideocamSharpFilled.displayName = 'AmauiIconMaterialVideocamSharpFilled';

export default IconMaterialVideocamSharpFilled;
