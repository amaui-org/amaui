import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletMacSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacSharp'
      short_name='TabletMac'

      {...props}
    >
      <path d="M3 23V1H21V23ZM5 16H19V6H5ZM5 21H19V18H5ZM5 4H19V3H5ZM12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5Q13 19.075 12.713 18.788Q12.425 18.5 12 18.5Q11.575 18.5 11.288 18.788Q11 19.075 11 19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5ZM5 4V3V4ZM5 21V18V21Z"/>
    </Icon>
  );
});

IconMaterialTabletMacSharp.displayName = 'AmauiIconMaterialTabletMacSharp';

export default IconMaterialTabletMacSharp;
