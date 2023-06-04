import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBurstMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstMode'

      short_name='BurstMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19V5h2v14Zm-4 0V5h2v14Zm8 0V5h14v14Zm2-2h10V7H11Zm1-2h8l-2.6-3.5-1.9 2.5-1.4-1.85Zm-1-8v10Z"/>
    </Icon>
  );
});

IconMaterialBurstMode.displayName = 'AmauiIconMaterialBurstMode';

export default IconMaterialBurstMode;
