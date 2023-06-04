import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeft'

      short_name='TurnSlightLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M11.66,6V4H6v5.66h2V7.41l5,5V20h2v-7.58c0-0.53-0.21-1.04-0.59-1.41l-5-5H11.66z"/></g>
    </Icon>
  );
});

IconMaterialTurnSlightLeft.displayName = 'AmauiIconMaterialTurnSlightLeft';

export default IconMaterialTurnSlightLeft;
