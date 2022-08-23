import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExitToAppSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppSharpFilled'
      short_name='ExitToApp'

      {...props}
    >
      <path d="M10.5 17 9.1 15.55 11.65 13H3V11H11.65L9.1 8.45L10.5 7L15.5 12ZM3 21V15H5V19H19V5H5V9H3V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialExitToAppSharpFilled.displayName = 'AmauiIconMaterialExitToAppSharpFilled';

export default IconMaterialExitToAppSharpFilled;
