import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitFilled'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240h200v-360H440v360ZM320-360h60v-300h140v-60H320v360ZM800-80H160v-800h640v800Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitFilled.displayName = 'AmauiIconMaterialDesktopPortraitFilled';

export default IconMaterialDesktopPortraitFilled;
