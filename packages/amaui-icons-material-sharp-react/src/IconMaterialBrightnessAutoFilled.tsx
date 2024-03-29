import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoFilled'

      short_name='BrightnessAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 16h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6Zm2.85-3.6 1.3-3.75h.1l1.3 3.75ZM12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoFilled.displayName = 'AmauiIconMaterialBrightnessAutoFilled';

export default IconMaterialBrightnessAutoFilled;
