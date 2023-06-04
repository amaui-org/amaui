import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPushPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PushPinW100Filled'

      short_name='PushPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 12.55 16.15 14v.7h-3.8v4.7l-.35.35-.35-.35v-4.7h-3.8V14l1.45-1.45V5h-1v-.7h7.4V5h-1Z"/>
    </Icon>
  );
});

IconMaterialPushPinW100Filled.displayName = 'AmauiIconMaterialPushPinW100Filled';

export default IconMaterialPushPinW100Filled;
