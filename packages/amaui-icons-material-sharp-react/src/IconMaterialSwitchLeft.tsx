import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeft'

      short_name='SwitchLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 19-7-7 7-7Zm-1.5-3.625v-6.75L5.125 12ZM14 19V5l7 7Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeft.displayName = 'AmauiIconMaterialSwitchLeft';

export default IconMaterialSwitchLeft;
