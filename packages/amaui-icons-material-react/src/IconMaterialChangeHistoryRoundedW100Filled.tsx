import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChangeHistoryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryRoundedW100Filled'
      short_name='ChangeHistory'

      {...props}
    >
      <path d="M5.7 18.7Q5.25 18.7 5.05 18.312Q4.85 17.925 5.075 17.55L11.375 7.475Q11.6 7.125 12 7.125Q12.4 7.125 12.625 7.475L18.925 17.55Q19.15 17.925 18.95 18.312Q18.75 18.7 18.3 18.7Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryRoundedW100Filled.displayName = 'AmauiIconMaterialChangeHistoryRoundedW100Filled';

export default IconMaterialChangeHistoryRoundedW100Filled;
