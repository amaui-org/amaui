import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMac'

      short_name='DesktopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-1l2-2H2V3h20v16h-8l2 2v1Zm-4-8h16V5H4Zm0 0V5v9Z"/>
    </Icon>
  );
});

IconMaterialDesktopMac.displayName = 'AmauiIconMaterialDesktopMac';

export default IconMaterialDesktopMac;
