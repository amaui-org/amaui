import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleSharp'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Zm7 11-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialAutoScheduleSharp.displayName = 'AmauiIconMaterialAutoScheduleSharp';

export default IconMaterialAutoScheduleSharp;
