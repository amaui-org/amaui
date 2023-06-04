import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicNoiseCancelOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelOffW100Filled'

      short_name='MicNoiseCancelOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m261 812-19-19q44-43 67-99.5T332 576q0-61-23-117.5T242 359l10-11 65 65q20 37 31 78.5t11 84.5q0 67-25 127.5T261 812Zm-91-91-20-21q26-25 39-57t13-67q0-35-13-67.5T150 451l20-21q29 29 45 66.5t16 79.5q0 42-16 79t-45 66Zm436-131-6-6v-22h54v28h-48Zm128 0v-28h54v28h-54ZM494 478l-28-28V268h28v210Zm300 452L494 630v254h-28V602L126 262l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelOffW100Filled.displayName = 'AmauiIconMaterialMicNoiseCancelOffW100Filled';

export default IconMaterialMicNoiseCancelOffW100Filled;
