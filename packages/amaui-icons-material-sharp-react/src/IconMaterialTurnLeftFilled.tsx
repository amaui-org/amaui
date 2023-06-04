import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftFilled'

      short_name='TurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20v-9H6.8l1.6 1.6L7 14l-4-4 4-4 1.4 1.4L6.8 9H17v11Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftFilled.displayName = 'AmauiIconMaterialTurnLeftFilled';

export default IconMaterialTurnLeftFilled;
