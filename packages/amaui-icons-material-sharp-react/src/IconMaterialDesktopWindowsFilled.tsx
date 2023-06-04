import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsFilled'

      short_name='DesktopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-2h2v-2H2V3h20v15h-8v2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsFilled.displayName = 'AmauiIconMaterialDesktopWindowsFilled';

export default IconMaterialDesktopWindowsFilled;
