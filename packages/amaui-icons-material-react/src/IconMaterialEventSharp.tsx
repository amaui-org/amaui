import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSharp'
      short_name='Event'

      {...props}
    >
      <path d="M14.5 18Q13.45 18 12.725 17.275Q12 16.55 12 15.5Q12 14.45 12.725 13.725Q13.45 13 14.5 13Q15.55 13 16.275 13.725Q17 14.45 17 15.5Q17 16.55 16.275 17.275Q15.55 18 14.5 18ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialEventSharp.displayName = 'AmauiIconMaterialEventSharp';

export default IconMaterialEventSharp;
