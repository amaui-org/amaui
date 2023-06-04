import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLauncherAssistantOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LauncherAssistantOffFilled'

      short_name='LauncherAssistantOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-160q101 0 170.5-70T720 576q0-101-69.5-170.5T480 336q-100 0-170 69.5T240 576q0 100 70 170t170 70Zm0 80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialLauncherAssistantOffFilled.displayName = 'AmauiIconMaterialLauncherAssistantOffFilled';

export default IconMaterialLauncherAssistantOffFilled;
