import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpgradeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeFilled'

      short_name='Upgrade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20v-2h10v2Zm4-4V7.825L8.4 10.4 7 9l5-5 5 5-1.4 1.4L13 7.825V16Z"/>
    </Icon>
  );
});

IconMaterialUpgradeFilled.displayName = 'AmauiIconMaterialUpgradeFilled';

export default IconMaterialUpgradeFilled;
