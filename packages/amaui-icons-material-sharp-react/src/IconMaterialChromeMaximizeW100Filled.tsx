import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMaximizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximizeW100Filled'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 844V308h536v536H212Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximizeW100Filled.displayName = 'AmauiIconMaterialChromeMaximizeW100Filled';

export default IconMaterialChromeMaximizeW100Filled;
