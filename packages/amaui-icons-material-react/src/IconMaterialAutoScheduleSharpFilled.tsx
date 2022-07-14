import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleSharpFilled'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5Zm7-1-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25Z"/>
    </Icon>
  );
});

export default IconMaterialAutoScheduleSharpFilled;
