import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftW100Filled'

      short_name='TurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 19.35v-9H5.275l2.25 2.25-.5.5-3.1-3.1 3.1-3.1.5.5-2.25 2.25H16.35v9.7Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftW100Filled.displayName = 'AmauiIconMaterialTurnLeftW100Filled';

export default IconMaterialTurnLeftW100Filled;
