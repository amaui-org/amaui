import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFoldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldFilled'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.825 0-1.412-.587Q10 19.825 10 19V4.275q0-.6.325-1.088.325-.487.875-.737l3-1.3q1-.425 1.9.162Q17 1.9 17 3h3q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21Zm2.675-2H20V5h-3v11.675q0 .6-.325 1.113-.325.512-.875.737ZM2 5V3h2v2Zm0 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4-4V3h2v2Zm0 16v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldFilled.displayName = 'AmauiIconMaterialDevicesFoldFilled';

export default IconMaterialDevicesFoldFilled;
