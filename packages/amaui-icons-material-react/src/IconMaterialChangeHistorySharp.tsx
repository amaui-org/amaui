import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChangeHistorySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistorySharp'
      short_name='ChangeHistory'

      {...props}
    >
      <path d="M2 20 12 4 22 20ZM5.6 18H18.4L12 7.75ZM12 12.875Z"/>
    </Icon>
  );
});

IconMaterialChangeHistorySharp.displayName = 'AmauiIconMaterialChangeHistorySharp';

export default IconMaterialChangeHistorySharp;
