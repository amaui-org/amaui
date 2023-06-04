import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMaximizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximizeW100'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 844V308h536v536H212Zm28-28h480V336H240v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximizeW100.displayName = 'AmauiIconMaterialChromeMaximizeW100';

export default IconMaterialChromeMaximizeW100;
