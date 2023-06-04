import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOn'

      short_name='MicExternalOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 7q-.375-.425-.587-.925Q4 5.575 4 5q0-1.25.875-2.125T7 2q1.25 0 2.125.875T10 5q0 .575-.212 1.075-.213.5-.588.925ZM6 22v-4H5L4 8h6L9 18H8v2h4V2h8v20h-2V4h-4v18Zm.8-6h.4l.6-6H6.2Zm.4-6h-1 1.6Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOn.displayName = 'AmauiIconMaterialMicExternalOn';

export default IconMaterialMicExternalOn;
