import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMinimizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMinimizeFilled'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialChromeMinimizeFilled.displayName = 'AmauiIconMaterialChromeMinimizeFilled';

export default IconMaterialChromeMinimizeFilled;
