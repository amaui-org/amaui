import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharpFilled'
      short_name='Flag'

      {...props}
    >
      <path d="M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21Z"/>
    </Icon>
  );
});

IconMaterialFlagSharpFilled.displayName = 'AmauiIconMaterialFlagSharpFilled';

export default IconMaterialFlagSharpFilled;
