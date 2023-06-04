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
      <path d="M160 896V256h640v640H160Zm80-80h480V336H240v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximize.displayName = 'AmauiIconMaterialChromeMaximize';

export default IconMaterialChromeMaximize;
