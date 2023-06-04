import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledW100Filled'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 4.3v1L2.1 2.6l.5-.5 18.35 18.35-.5.5-4.25-4.25h-3.5v2h2v.7H9.3v-.7h2v-2h-8V4.3Zm15.075 12.25L7.625 4.3H20.7v12.25Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100Filled.displayName = 'AmauiIconMaterialDesktopAccessDisabledW100Filled';

export default IconMaterialDesktopAccessDisabledW100Filled;
