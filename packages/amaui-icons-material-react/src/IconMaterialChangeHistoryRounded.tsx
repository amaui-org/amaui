import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChangeHistoryRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryRounded'
      short_name='ChangeHistory'

      {...props}
    >
      <path d="M3.8 20Q3.225 20 2.925 19.488Q2.625 18.975 2.95 18.475L11.15 5.35Q11.45 4.875 12 4.875Q12.55 4.875 12.85 5.35L21.05 18.475Q21.375 18.975 21.075 19.488Q20.775 20 20.2 20ZM5.6 18H18.4L12 7.75ZM12 12.875Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryRounded.displayName = 'AmauiIconMaterialChangeHistoryRounded';

export default IconMaterialChangeHistoryRounded;
