import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPushPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PushPinW100'

      short_name='PushPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 12.55 16.15 14v.7h-3.8v4.7l-.35.35-.35-.35v-4.7h-3.8V14l1.45-1.45V5h-1v-.7h7.4V5h-1ZM8.85 14h6.3L14 12.85V5h-4v7.85ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPushPinW100.displayName = 'AmauiIconMaterialPushPinW100';

export default IconMaterialPushPinW100;
