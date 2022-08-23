import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareSharpFilled'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M8 14H10V11H13V13L16 10L13 7V9H8ZM2 18V3H22V18ZM1 21V19H23V21Z"/>
    </Icon>
  );
});

IconMaterialScreenShareSharpFilled.displayName = 'AmauiIconMaterialScreenShareSharpFilled';

export default IconMaterialScreenShareSharpFilled;
