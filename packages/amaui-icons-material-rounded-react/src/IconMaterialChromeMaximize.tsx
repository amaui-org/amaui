import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMaximize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximize'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 896q-33 0-56.5-23.5T160 816V336q0-33 23.5-56.5T240 256h480q33 0 56.5 23.5T800 336v480q0 33-23.5 56.5T720 896H240Zm0-80h480V336H240v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximize.displayName = 'AmauiIconMaterialChromeMaximize';

export default IconMaterialChromeMaximize;
