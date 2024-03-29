import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraFilled'

      short_name='SwitchCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.7 13.7 2.6 2.6q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-.85-.85h6.3l-.85.85q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275l2.6-2.6q.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.275-.275-.7-.275-.425 0-.7.275-.3.3-.3.7 0 .4.275.7l.925.95H8.8l.925-.95q.275-.3.275-.7 0-.4-.3-.7-.275-.275-.7-.275-.425 0-.7.275l-2.6 2.6q-.275.275-.275.7 0 .425.275.7ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraFilled.displayName = 'AmauiIconMaterialSwitchCameraFilled';

export default IconMaterialSwitchCameraFilled;
