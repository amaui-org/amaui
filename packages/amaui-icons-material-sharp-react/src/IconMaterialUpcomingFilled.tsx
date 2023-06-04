import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcomingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingFilled'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.6 10.8-1.4-1.4 3.55-3.55 1.4 1.4ZM11 8V3h2v5Zm-4.6 2.8L2.85 7.25l1.4-1.4L7.8 9.4ZM2 21v-9h7q0 1.25.875 2.125T12 15q1.25 0 2.125-.875T15 12h7v9Z"/>
    </Icon>
  );
});

IconMaterialUpcomingFilled.displayName = 'AmauiIconMaterialUpcomingFilled';

export default IconMaterialUpcomingFilled;
