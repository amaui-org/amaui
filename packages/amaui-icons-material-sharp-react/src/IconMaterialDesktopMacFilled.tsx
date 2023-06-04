import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacFilled'

      short_name='DesktopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-1l2-2H2V3h20v16h-8l2 2v1Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacFilled.displayName = 'AmauiIconMaterialDesktopMacFilled';

export default IconMaterialDesktopMacFilled;
