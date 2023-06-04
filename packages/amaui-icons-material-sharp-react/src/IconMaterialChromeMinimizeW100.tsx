import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMinimizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMinimizeW100'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 844v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialChromeMinimizeW100.displayName = 'AmauiIconMaterialChromeMinimizeW100';

export default IconMaterialChromeMinimizeW100;
