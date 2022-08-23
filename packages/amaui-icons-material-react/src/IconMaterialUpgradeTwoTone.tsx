import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeTwoTone'
      short_name='Upgrade'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z"/></g>
    </Icon>
  );
});

IconMaterialUpgradeTwoTone.displayName = 'AmauiIconMaterialUpgradeTwoTone';

export default IconMaterialUpgradeTwoTone;
