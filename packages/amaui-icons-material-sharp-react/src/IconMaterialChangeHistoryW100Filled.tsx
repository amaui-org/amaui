import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryW100Filled'

      short_name='ChangeHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 18.7 12 6.45l7.65 12.25Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100Filled.displayName = 'AmauiIconMaterialChangeHistoryW100Filled';

export default IconMaterialChangeHistoryW100Filled;
