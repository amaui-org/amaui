import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpgrade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upgrade'

      short_name='Upgrade'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z"/></g>
    </Icon>
  );
});

IconMaterialUpgrade.displayName = 'AmauiIconMaterialUpgrade';

export default IconMaterialUpgrade;
